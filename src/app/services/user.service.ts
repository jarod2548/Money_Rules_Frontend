import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { RegisterDTO } from "../models/RegisterDTO";
import { LoginDTO } from "../models/LoginDTO";
import { LoginResponseDTO } from "../models/LoginResponseDTO";

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject = new BehaviorSubject<LoginResponseDTO | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  maakAccount(dto: RegisterDTO): Observable<boolean> {
    return this.http.post<void>(
      `/api/registreer`,
      dto,
      { observe: 'response' } // We need the full HTTP response to check status
    ).pipe(
      // Map the response: true if the status is 201 (Created)
      map(response => response.status === 201),

      // Catch any error and return false instead of throwing
      catchError(error => {
        console.error('Error creating account:', error);
        return of(false);
      })
    );
  }

    login(dto:LoginDTO): Observable<string>{
      return this.http.post<LoginResponseDTO>(`/api/login`, dto, {observe: 'response'})
      .pipe(
        map(res => res.body?.naam || '' ),
        catchError((err) => {
            console.log(err);
            return of('');
        })
      )
    }
    
    authorize() {
    return this.http.get<LoginResponseDTO>(`/api/me`).pipe(
      tap(user => this.currentUserSubject.next(user)),
      catchError((err) => {
        console.log(err);
        this.currentUserSubject.next(null);
        return of(null);
      })
    );
  }
}