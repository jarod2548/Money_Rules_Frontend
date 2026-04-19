import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { BudgetDTO } from '../models/BudgetDTO';
import { BudgetService } from '../services/Budget.service';
import { form, min } from '@angular/forms/signals';
import { BudgetCreateModalComponent } from './budget-create-modal.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-budget',
  imports: [BudgetCreateModalComponent],
  templateUrl: './budget.html',
  styleUrl: './budget.css',
})
export class Budget {
  showModal = signal(false);

  budgets = signal<BudgetDTO[]>([]);

  budgetData = signal<BudgetDTO>({
  aantal : 0,
  naam : ""
});

BudgetForm = form(this.budgetData, (schema)=>{
  min(schema.aantal, 1, {message: "Aantal moet meer dan 0 zijn"});
})

  constructor(private budgetService : BudgetService,  @Inject(PLATFORM_ID) private platformId: Object){}

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
  this.budgets.update(b => [...b, budget]);
}

  OnSubmit(){
    this.budgetService.maakBudget(this.budgetData());
  }
}
