import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink  } from '@angular/router';
import { LoginUsuario } from 'src/app/componentes/entidades/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario! : LoginUsuario;
  nombreUsuario! : string;
  password!: string;
  roles : string[] = [];
  errorMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }


  onEnviar(){
    if(this.tokenService.getUserName() == "admin"){
     return this.router.navigate(['/administrador']);
    } else {
      return this.router.navigate(['/index']);
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe(
        data => {
        this.isLogged = true;
        this.isLogginFail = false; 
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMsj = err.error.mensaje;
        console.log(this.errorMsj); 
      })
  } 
}