import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../componentes/entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url= 'http://localhost:8080/habilidad/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `detail/${id}`); 
  }

  public save(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', habilidad);
  }

  public update(id:number, habilidad: Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.url + `detail/${id}`, habilidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
