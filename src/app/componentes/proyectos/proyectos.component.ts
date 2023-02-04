import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../entidades/proyecto';


@Component({
  selector: 'app-proyectosnm',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit{
  proyecto : Proyecto []=[];

  constructor(private sProyecto: ProyectoService){ }

  ngOnInit(): void {
  this.cargarProyecto();
  }

  public cargarProyecto(): void {
    this.sProyecto.list().subscribe(data => {this.proyecto=data});
  }

}
