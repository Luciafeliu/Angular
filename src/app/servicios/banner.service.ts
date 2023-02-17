import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../componentes/entidades/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  url= 'http://localhost:8080/banner/';
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.url + `detail/${id}`); 
  }

  public save (banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', banner);
  }

  public edit (banner: Banner):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', banner);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

}
