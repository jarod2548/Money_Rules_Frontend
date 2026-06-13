import {
  Component,
  Inject,
  PLATFORM_ID,
  signal,
  OnInit
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import { CategorieResponseDTO } from '../models/CategorieResponseDTO';
import { CategorieService } from '../services/categorie.service';
import { CategorieDTO } from '../models/CategorieDTO';

import { CategorieCreateModalComponent } from './categorie-create-modal.component';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    CommonModule,
    CategorieCreateModalComponent
  ],
  templateUrl: './categorie.html',
  styleUrl: './categorie.css',
})
export class Categorie implements OnInit {

  showModal = signal(false);

  categorien = signal<CategorieResponseDTO[]>([]);

  constructor(
    private categorieService: CategorieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.laadCategorien();
    }
  }

  laadCategorien() {
    this.categorieService.getCategorien().subscribe({
      next: (data) => {
        this.categorien.set(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  addCategorie(categorie: CategorieDTO) {
    this.categorieService.maakCategorie(categorie).subscribe({
      next: () => {
        this.laadCategorien();
        this.closeModal();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}