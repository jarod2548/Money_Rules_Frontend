import { Component, computed, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactieDTO } from '../models/TransactieDTO';
import { form, min, required } from '@angular/forms/signals';
import { CategorieResponseDTO } from '../models/CategorieResponseDTO';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-transactie-create-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactie-create-modal.component.html',
  styleUrl: './transactie-create-modal.component.css',
})
export class TransactieCreateModalComponent {

  constructor(private categorieService : CategorieService){}

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<TransactieDTO>();

  transactieData = signal<TransactieDTO>({
    aantal : 0,
    datum : "2000-02-02T00:00:00" ,
    beschrijving : "",
    categorieId : undefined
  })
  categorien = signal<CategorieResponseDTO[]>([]);

  ngOnInit(): void{
    this.loadCategorien();
  }

  loadCategorien(){
    this.categorieService.getCategorien().subscribe({
      next : (data) => this.categorien.set(data)
    });
  }

  transactieErrors = signal<{aantal? : string; datum? : string; beschrijving? : string}>({});

  transactieForm = form(this.transactieData, (schema) => {
    required(schema.aantal, { message: 'Aantal moet ingevuld worden' });
    min(schema.aantal, 1, { message: 'Aantal moet groter dan 0 zijn' });
    required(schema.datum, { message: 'Datum moet worden ingevuld' });
  });

  onBeschrijvingChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;

  this.transactieData.update(current => ({
    ...current,
    beschrijving: value
  }));
}

onAantalChange(event: Event) {
  const value = +(event.target as HTMLInputElement).value;

  this.transactieData.update(current => ({
    ...current,
    aantal: value
  }));
}

onDatumChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;

  this.transactieData.update(current => ({
    ...current,
    datum: value
  }));
}

onCategorieChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;

  this.transactieData.update(current => ({
    ...current,
    categorieId: value || undefined
  }));
}

formatDate(value: string) {
  return value?.split('T')[0]; 
}

formIsValid = computed(() =>
  this.transactieForm.aantal().valid() &&
  this.transactieForm.datum().valid()
);

  onSubmit() {

    if(!this.formIsValid()) return;

    this.save.emit(this.transactieData());
  }

  closeModal() {
    this.close.emit();
  }
}