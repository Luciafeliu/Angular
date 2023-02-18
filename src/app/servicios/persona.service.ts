import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaModel } from '../componentes/entidades/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/persona/';


  constructor(private http:HttpClient) { }

  public list(): Observable<PersonaModel[]>{
    return this.http.get<PersonaModel[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<PersonaModel>{
    return this.http.get<PersonaModel>(this.url + `detail/${id}`); 
  }

  public getPersona(): Observable<PersonaModel> {
    return this.http.get<PersonaModel>(this.url+ 'traer/perfil');
}
  
  public save(persona: PersonaModel):Observable<any>{
      return this.http.post<any>(this.url + 'crear', persona);
    }

}
