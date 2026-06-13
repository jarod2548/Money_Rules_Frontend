
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactieDTO } from '../models/TransactieDTO';
import { TransactieResponseDTO } from '../models/TransactieResponseDTO';



@Injectable({
  providedIn: 'root'
})
export class TransactieService {

  constructor(private http: HttpClient) {}

  saveTransactie(dto: TransactieDTO): Observable<void> {
  return this.http.post<void>('/api/user/transactie', dto);
  }
  getTransacties() : Observable<TransactieResponseDTO[]> {
    return this.http.get<TransactieResponseDTO[]>(`api/user/transactie`);
  }
}

  