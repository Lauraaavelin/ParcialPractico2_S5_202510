import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../ingredientes/ingrediente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private apiUrl= 'http://localhost:8080/ingredientes';
  constructor(private http: HttpClient) {     
  }
  obtenerIngredientes():Observable<Ingrediente[]>{
      return this.http.get<Ingrediente[]>(this.apiUrl);
    }
}
