import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private datos:HttpClient) { }

  getDatos():Observable<any>{

    return this.datos.get('./assets/json/datos.json');
}
}
