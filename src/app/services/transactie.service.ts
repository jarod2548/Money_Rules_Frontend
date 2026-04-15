
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactieDTO } from '../models/TransactieDTO';



@Injectable({
  providedIn: 'root'
})
export class TransactieService {

  constructor(private http: HttpClient) {}

  getTransacties(): Observable<TransactieDTO[]> {
    return this.http.get<TransactieDTO[]>('/api/user/transactie');
  }

  saveTransactie(dto : TransactieDTO): void {
    this.http.post<void>('/api/user/transactie', dto).subscribe({
      next: () => console.log("transactie gemaakt"),
      error: err => console.log(err)
    });
  }
}
  