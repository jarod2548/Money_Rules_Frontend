
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transactie } from '../models/Transactie';



@Injectable({
  providedIn: 'root'
})
export class TransactieService {
  private apiUrl = '/api/transacties';
  private api2Url = '/api/transactiesError';

  constructor(private http: HttpClient) {}

  getTransacties(): Observable<Transactie[]> {
    return this.http.get<Transactie[]>(this.apiUrl);
  }
}
  