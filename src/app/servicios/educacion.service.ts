import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../componentes/entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url= 'http://localhost:8080/estudio/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`); 
  }

  public save(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', educacion);
  }

  public update(id:number, educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url + `detail/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}