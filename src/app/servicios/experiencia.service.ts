import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../componentes/entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'backend-luciafeliu.koyeb.app/experiencia/';
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`); 
  }

  public save (experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public update (experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + `editar/$`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}
