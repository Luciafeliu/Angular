import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footer } from '../componentes/entidades/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  url= 'https://backend-luciafeliu.koyeb.app/footer/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Footer[]>{
    return this.httpClient.get<Footer[]>(this.url + 'lista');

  }
//para que traiga los valores desde la base de datos (tiene que estar corriendo)//
  public detail(id: number): Observable<Footer>{
    return this.httpClient.get<Footer>(this.url + `detail/${id}`); 
  }

  public save(footer: Footer):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', footer);
  }

  public update(id:number, footer: Footer):Observable<any>{
    return this.httpClient.put<any>(this.url + `detail/${id}`, footer);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
