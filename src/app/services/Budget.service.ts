
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetDTO } from '../models/BudgetDTO';



@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<BudgetDTO[]> {
    return this.http.get<BudgetDTO[]>('/api/user/budgets');
  }
  getBudget(id : string): Observable<BudgetDTO> {
    return this.http.get<BudgetDTO>(`/api/user/budget${id}`);
  }
  maakBudget(budget : BudgetDTO): Observable<BudgetDTO>{
    return this.http.post<BudgetDTO>('/api/user/maakBudget', budget);
  }
}