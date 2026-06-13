import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { BudgetDTO } from '../models/Budget/BudgetDTO';
import { BudgetService } from '../services/Budget.service';
import { BudgetCreateModalComponent } from './budget-create-modal.component';
import { isPlatformBrowser } from '@angular/common';
import { BudgetResponseDTO } from '../models/Budget/BudgetResponseDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  imports: [BudgetCreateModalComponent],
  templateUrl: './leesBudgets.html',
  styleUrl: './budget.css',
})
export class LeesBudgets {
  showModal = signal(false);
  

  budgets = signal<BudgetResponseDTO[]>([]);


  constructor(private budgetService : BudgetService, private router : Router, @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.laadBudgets();
    }
  }

  laadBudgets(){
    this.budgetService.getBudgets().subscribe({
        next: (data) => {
          this.budgets.set(data);
        },
        error: (err) => {
          console.log(err);
        }
    });
  }

  openModal() {
  this.showModal.set(true);
}

closeModal() {
  this.showModal.set(false);
}

addBudget(budget: BudgetDTO) {
  this.budgetService.maakBudget(budget).subscribe({
    next:()=> {
      this.laadBudgets();
    },
    error: (err) => {
      console.log(err);
    }
  });
}

goToBudget(id: string) {
  this.router.navigate(['/leesBudget', id]);
}

}
