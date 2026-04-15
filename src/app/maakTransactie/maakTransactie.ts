import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TransactieDTO } from '../models/TransactieDTO';
import { TransactieService } from '../services/transactie.service';
import { form, FormField, min, required, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-transactie',
  standalone: true, 
  imports: [FormsModule, FormField],
  templateUrl: './maakTransactie.html',
  styleUrl: './maakTransactie.css',
})
export class maakTransactie {




  constructor (private transactieService : TransactieService){
  }
  
  transactieData = signal<TransactieDTO>({
    aantal : 0,
    datum : "2000-02-02T00:00:00" ,
    beschrijving : ""
  })

  transactieErrors = signal<{aantal? : string; datum? : string; beschrijving? : string}>({});

  transactieForm = form(this.transactieData, (schema) => {
    required(schema.aantal, { message: 'Aantal moet ingevuld worden' });
    min(schema.aantal, 1, { message: 'Aantal moet groter dan 0 zijn' });
    required(schema.datum, { message: 'Datum moet worden ingevuld' });
  });

  updateAantal(event : Event){
    const value = (event.target as HTMLInputElement).value;
    this.transactieData.update(m => ({...m, aantal : Number(value)}))
    console.log('Form valid:', this.transactieForm.aantal().valid);
  }
  updateDatum(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.transactieData.update(m => ({ ...m, datum: value }));
  }

  updateBeschrijving(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.transactieData.update(m => ({ ...m, beschrijving: value }));
  };

  formIsValid = computed(() =>
  this.transactieForm.aantal().valid() &&
  this.transactieForm.datum().valid()
);

onSubmit() {
if(!this.formIsValid()) return;
    const data = this.transactieData();
    this.transactieService.saveTransactie(data);
    alert('Form submitted!');

  }
}
