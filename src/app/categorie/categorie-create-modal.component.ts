import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategorieDTO } from '../models/CategorieDTO';

@Component({
  selector: 'app-categorie-create-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorie-create-modal.component.html',
  styleUrl: './categorie-create-modal.component.css',
})
export class CategorieCreateModalComponent {

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<CategorieDTO>();

  categorieData = signal<CategorieDTO>({
    naam: '',
    isBelangrijk: false,
  });

  error = signal<string>('');

  onSubmit() {

    if (!this.categorieData().naam.trim()) {
      this.error.set('Naam moet ingevuld zijn');
      return;
    }

    this.save.emit(this.categorieData());
  }

  closeModal() {
    this.close.emit();
  }
}