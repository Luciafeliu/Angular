import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../componentes/entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url= 'http://localhost:8080/proyecto/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`); 
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', proyecto);
  }

  public update(id:number, proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + `detail/${id}`, proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
