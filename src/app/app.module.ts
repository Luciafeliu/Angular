import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FotoinfoComponent } from './modales/fotoinfo/fotoinfo.component';
import { InfopersonalComponent } from './componentes/administrador/infopersonal/infopersonal.component';
import { BanneradminComponent } from './componentes/administrador/banneradmin/banneradmin.component';
import { InfoComponent } from './modales/info/info.component';
import { ExpComponent } from './modales/exp/exp.component';
import { ExpadminComponent } from './componentes/administrador/expadmin/expadmin.component';
import { EducacionadminComponent } from './componentes/administrador/educacionadmin/educacionadmin.component';
import { EdComponent } from './modales/ed/ed.component';
import { HabilidadesadminComponent } from './componentes/administrador/habilidadesadmin/habilidadesadmin.component';
import { HabilidadComponent } from './modales/habilidad/habilidad.component';
import { ProyectosadminComponent } from './componentes/administrador/proyectosadmin/proyectosadmin.component';
import { ProyectsComponent } from './modales/proyects/proyects.component';
import { FooteradminComponent } from './componentes/administrador/footeradmin/footeradmin.component';
import { ContactoComponent } from './modales/contacto/contacto.component';

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
    LogoutComponent,
    FotoinfoComponent,
    InfopersonalComponent,
    BanneradminComponent,
    InfoComponent,
    ExpComponent,
    ExpadminComponent,
    EducacionadminComponent,
    EdComponent,
    HabilidadesadminComponent,
    HabilidadComponent,
    ProyectosadminComponent,
    ProyectsComponent,
    FooteradminComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
