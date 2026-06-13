import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactieService } from '../services/transactie.service';
import { TransactieResponseDTO } from '../models/TransactieResponseDTO';
import { TransactieDTO } from '../models/TransactieDTO';
import { TransactieCreateModalComponent } from './transactie-create-modal.component';

@Component({
  selector: 'app-transactie',
  standalone: true,
  imports: [CommonModule, TransactieCreateModalComponent],
  templateUrl: './transactie.html',
  styleUrl: './transactie.css',
})
export class Transactie implements OnInit {

  transacties = signal<TransactieResponseDTO[]>([]);
  showModal = signal(false);

  constructor(private transactieService: TransactieService) {}

  ngOnInit(): void {
    this.loadTransacties();
  }

  loadTransacties() {
    this.transactieService.getTransacties().subscribe({
      next: (data) => this.transacties.set(data),
      error: (err) => console.error('Fout bij ophalen transacties', err),
    });
  }

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  saveTransactie(dto: TransactieDTO) {
    this.transactieService.saveTransactie(dto).subscribe({
      next: () => {
        this.closeModal();
        this.loadTransacties(); // refresh list
      },
      error: (err: Error) => console.error('Fout bij opslaan transactie', err),
    });
  }
}