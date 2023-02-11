import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { NuevoUsuario } from '../componentes/entidades/nuevo-usuario';
import { LoginUsuario } from '../componentes/entidades/login-usuario';
import { JwtDto } from '../componentes/entidades/jwt-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

 constructor(private httpClient: HttpClient){ }

 public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
  return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
  return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
 }
}
