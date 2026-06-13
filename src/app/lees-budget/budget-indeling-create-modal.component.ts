import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { form, min, required } from '@angular/forms/signals';

import { BudgetIndelingDTO } from '../models/Budget/BudgetIndelingDTO';
import { CategorieResponseDTO } from '../models/CategorieResponseDTO';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-budget-indeling-create-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-indeling-create-modal.component.html',
  styleUrl: './budget-indeling-create-modal.component.css',
})
export class BudgetIndelingCreateModalComponent {

  constructor(private categorieService: CategorieService) {}

  @Input() budgetId!: string;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<BudgetIndelingDTO>();

  budgetIndelingData = signal<BudgetIndelingDTO>({
    aantal: 0,
    budgetID: '',
    categorieID: ''
  });

  categorien = signal<CategorieResponseDTO[]>([]);

  ngOnInit(): void {
    this.budgetIndelingData.update(i => ({
      ...i,
      budgetID: this.budgetId
    }));

    this.loadCategorien();
  }

  loadCategorien() {
    this.categorieService.getCategorien().subscribe({
      next: (data) => this.categorien.set(data)
    });
  }

  budgetIndelingErrors = signal<{ aantal?: string }>({});

  budgetIndelingForm = form(this.budgetIndelingData, (schema) => {
    required(schema.aantal, { message: 'Aantal moet ingevuld worden' });
    min(schema.aantal, 1, { message: 'Aantal moet groter dan 0 zijn' });
  });

  onAantalChange(event: Event) {
    const value = +(event.target as HTMLInputElement).value;

    this.budgetIndelingData.update(current => ({
      ...current,
      aantal: value
    }));
  }

  onCategorieChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    this.budgetIndelingData.update(current => ({
      ...current,
      categorieID: value || ''
    }));
  }

  formIsValid = computed(() =>
    this.budgetIndelingForm.aantal().valid() &&
    this.budgetIndelingData().categorieID !== ''
  );

  onSubmit() {

    if (!this.formIsValid()) return;
    this.save.emit(this.budgetIndelingData());
  }

  closeModal() {
    this.close.emit();
  }
}