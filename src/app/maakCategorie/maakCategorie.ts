import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-categorie',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './maakCategorie.html',
  styleUrl: './maakCategorie.css',
})
export class maakCategorie {
onSubmit() {
    this.categorieService.maakCategorie(this.categorie).subscribe({
        next: (response) => {
            
        }
    });
  }
}
