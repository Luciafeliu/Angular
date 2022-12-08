import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'administrador', component:AdministradorComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
