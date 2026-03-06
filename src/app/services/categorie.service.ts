
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {}

  getCategorien(): Observable<CategorieDTO[]> {
    return this.http.get<CategorieDTO[]>('/api/categorie');
  }
  maakCatogrie(categorie : CategorieDTO): Observable<CategorieDTO>{
    return this.http.post<CategorieDTO>('/api/maakCategorie', categorie);
  }
}