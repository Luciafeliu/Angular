import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaModel } from '../componentes/entidades/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<PersonaModel> {
    return this.http.get<PersonaModel>(this.URL+ 'traer/perfil');
}
}
