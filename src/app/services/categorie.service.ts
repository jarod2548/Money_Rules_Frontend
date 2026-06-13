
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieDTO } from '../models/CategorieDTO';
import { CategorieResponseDTO } from '../models/CategorieResponseDTO';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {}

  getCategorien(): Observable<CategorieResponseDTO[]> {
    return this.http.get<CategorieResponseDTO[]>('/api/user/categorie');
  }
  maakCategorie(categorie : CategorieDTO): Observable<CategorieResponseDTO>{
    return this.http.post<CategorieResponseDTO>('/api/user/categorie', categorie);
  }
}