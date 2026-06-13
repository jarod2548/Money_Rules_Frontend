import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../services/Budget.service';
import { BudgetOverviewResponseDTO } from '../models/Budget/BudgetOverviewResponseDTO';
import { CommonModule } from '@angular/common';
import { BudgetIndelingDTO } from '../models/Budget/BudgetIndelingDTO';
import { BudgetIndelingCreateModalComponent } from './budget-indeling-create-modal.component';

@Component({
  selector: 'app-lees-budget',
  imports: [CommonModule, BudgetIndelingCreateModalComponent],
  templateUrl: './lees-budget.html',
  styleUrl: './lees-budget.css',
})
export class LeesBudget {
  route = inject(ActivatedRoute);

  showIndelingModal = signal(false);

  budgetOverview = signal<BudgetOverviewResponseDTO>({
  budgetDTO: {
    id: '',
    aantal: 0,
    naam: '',
    beginDatum: undefined,
    eindDatum: undefined
  },
  indelingen: [],
  totaalUitgave: 0
});

openIndelingModal(budgetId: string) {
  this.showIndelingModal.set(true);
}

closeIndelingModal() {
  this.showIndelingModal.set(false);
}

addIndeling(indeling: BudgetIndelingDTO) {
  this.budgetService.maakBudgetIndeling(indeling).subscribe({
    next: () => {
      this.closeIndelingModal();
    },
    error: (err) => console.log(err)
  });
}


  budgetId = '';

  constructor(private budgetService : BudgetService){}

  ngOnInit() {
    this.budgetId = this.route.snapshot.paramMap.get('id')!;
    this.leesBudget();
  }

  leesBudget(){
    this.budgetService.getBudget(this.budgetId).subscribe({
        next: (data) => {
          console.log(data);
          this.budgetOverview.set({
        budgetDTO: data.budgetDTO,
        indelingen: data.indelingen,
        totaalUitgave: data.totaalUitgave
      });
      console.log("budgetOverview naam " + this.budgetOverview().budgetDTO.naam)
        },
        error: (err) => {
          console.log(err);
        }
    });
  }
}
