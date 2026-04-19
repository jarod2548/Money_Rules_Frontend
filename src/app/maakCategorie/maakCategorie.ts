import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CategorieService } from '../services/categorie.service';
import { CategorieDTO } from '../models/CategorieDTO';

@Component({
  selector: 'app-categorie',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './maakCategorie.html',
  styleUrl: './maakCategorie.css',
})
export class maakCategorie {

 constructor(private categorieService: CategorieService) {}

 categorie: CategorieDTO = {
    beschrijving: '',
    isBelangrijk: false
  };

onSubmit() {
    this.categorieService.maakCategorie(this.categorie).subscribe({
        next: (response) => {
            
        }
    });
  }
}
