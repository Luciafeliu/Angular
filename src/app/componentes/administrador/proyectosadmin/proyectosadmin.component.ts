import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../../entidades/proyecto';

@Component({
  selector: 'app-proyectosadmin',
  templateUrl: './proyectosadmin.component.html',
  styleUrls: ['./proyectosadmin.component.css']
})
export class ProyectosadminComponent implements OnInit{
  proyecto : Proyecto []=[];

  constructor(private sProyecto: ProyectoService){ }

  ngOnInit(): void {
  this.cargarProyecto();
  }

  public cargarProyecto(): void {
    this.sProyecto.list().subscribe(data => {this.proyecto=data});
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
          alert("Se ha eliminado el proyecto correctamente");
          window.location.reload();
        }, err => {
          alert("No se ha podido eliminar el proyecto");
        }
      )
    }
}
}
