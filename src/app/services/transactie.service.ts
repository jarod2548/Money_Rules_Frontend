
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactieDTO } from '../models/TransactieDTO';



@Injectable({
  providedIn: 'root'
})
export class TransactieService {
  private apiUrl = '/api/transacties';

  constructor(private http: HttpClient) {}

  getTransacties(): Observable<TransactieDTO[]> {
    return this.http.get<TransactieDTO[]>(this.apiUrl);
  }

  saveTransactie(dto : TransactieDTO): void {
    this.http.post<void>(this.apiUrl, dto).subscribe({
      next: () => console.log("transactie gemaakt"),
      error: err => console.log(err)
    });
  }
}
  