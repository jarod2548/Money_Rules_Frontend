import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-transactie',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './maakTransactie.html',
  styleUrl: './maakTransactie.css',
})
export class maakTransactie {
onSubmit() {
    alert('Form submitted!');
    // Here you could also handle the form values
  }
}
