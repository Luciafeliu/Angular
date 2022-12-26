import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:4200/index';
  token = localStorage.getItem('token'); 

  constructor(private http: HttpClient,private router: Router) { }

  login(email: string,password: string){
    this.http.post(this.uri + '/authenticate', {email: email, password: password})
    .subscribe((resp:any)=> {
      //redireccionamos el usuario a su perfil
      this.router.navigate(['profile']);
      //guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token);

    })

  }


  logout () {
    localStorage.removeItem('token');

  }

  public get logIn(): boolean {
     return (localStorage.getItem('token') !== null);

  }

}
