import { Component, computed, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetDTO } from '../models/BudgetDTO';
import { form, min } from '@angular/forms/signals';

@Component({
  selector: 'app-budget-create-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-create-modal.component.html',
  styleUrls: ['./budget-create-modal.component.css']
})
export class BudgetCreateModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<BudgetDTO>();

  budgetData = signal<BudgetDTO>({
    naam: '',
    aantal: 0,
    beginDatum: '',
    eindDatum: ''
  });

  BudgetForm = form(this.budgetData, (schema)=>{
  min(schema.aantal, 1, {message: "Aantal moet meer dan 0 zijn"});
})

  updateNaam(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.budgetData.update(b => ({ ...b, naam: value }));
  }

  updateAantal(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.budgetData.update(b => ({ ...b, aantal: value }));
  }

  updateBeginDatum(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.budgetData.update(b => ({ ...b, beginDatum: value }));
  }

  updateEindDatum(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.budgetData.update(b => ({ ...b, eindDatum: value }));
  }

  formIsValid = computed(() =>
  this.BudgetForm.aantal().valid()
  )

  submit() {
    this.save.emit(this.budgetData());
    this.close.emit();
  }
}