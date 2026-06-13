
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetDTO } from '../models/Budget/BudgetDTO';
import { BudgetResponseDTO } from '../models/Budget/BudgetResponseDTO';
import { BudgetOverviewResponseDTO } from '../models/Budget/BudgetOverviewResponseDTO';
import { BudgetIndelingDTO } from '../models/Budget/BudgetIndelingDTO';



@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<BudgetResponseDTO[]> {
    return this.http.get<BudgetResponseDTO[]>(`/api/user/budgets`);
  }
  getBudget(budgetID : string): Observable<BudgetOverviewResponseDTO> {
    return this.http.get<BudgetOverviewResponseDTO>(`/api/user/budget/${budgetID}`);
  }
  maakBudget(budget : BudgetDTO): Observable<BudgetDTO>{
    return this.http.post<BudgetDTO>('/api/user/budget', budget);
  }
  maakBudgetIndeling(budgetIndeling : BudgetIndelingDTO) {
          return this.http.post(`api/user/budgetIndeling`, budgetIndeling);
      }
}