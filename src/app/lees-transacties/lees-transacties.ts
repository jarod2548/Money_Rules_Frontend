import { Component, OnInit, signal } from '@angular/core';
import { TransactieService } from '../services/transactie.service';
import { TransactieDTO } from '../models/TransactieDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lees-transacties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lees-transacties.html',
  styleUrls: ['./lees-transacties.css'],
})
export class LeesTransacties {
  transacties = signal<TransactieDTO[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(private transactieService: TransactieService) {
  }

   ngOnInit() {
    this.loadTransacties();
  }

  loadTransacties() {
    console.log('leesTransacties: calling getTransacties()...');
    this.transactieService.getTransacties().subscribe({
      next: (data) => {
        console.log('4 leesTransacties: received data', data);
        this.transacties.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('leesTransacties: error fetching transacties', error);
        this.errorMessage.set(
          'Er is een fout opgetreden bij het laden van transacties.'
        );
        this.isLoading.set(false);
      },
    });
  }
}
