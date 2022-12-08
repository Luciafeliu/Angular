import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './modales/login/login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { HeaderadminComponent } from './componentes/headeradmin/headeradmin.component';
import { LogoutComponent } from './modales/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    RedesComponent,
    AdministradorComponent,
    ErrorComponent,
    IndexComponent,
    HeaderadminComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
