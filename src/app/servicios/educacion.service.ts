import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../componentes/entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url= 'https://backend-luciafeliu.koyeb.app/estudio/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`); 
  }

  public save(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }

  public update(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + `editar/$`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
