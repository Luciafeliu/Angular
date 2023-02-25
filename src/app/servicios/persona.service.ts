import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../componentes/entidades/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'backend-luciafeliu.koyeb.app/persona/';


  constructor(private http:HttpClient) { }

  public list(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.url + `detail/${id}`); 
  }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.url+ 'traer/perfil');
}

    public update(persona: Persona):Observable<any>{
      return this.http.post<any>(this.url + `editar/$`, persona);
    }
  
  public save(persona: Persona):Observable<any>{
      return this.http.post<any>(this.url + 'crear', persona);
    }

    public edit(id:number, persona: Persona):Observable<any>{
      return this.http.put<any>(this.url + `update/${id}`, persona);
    }

}
