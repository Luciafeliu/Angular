import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectosnm',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit{
  proyectos: any;
  imagen : any;
  constructor(private datos: DatosService){ }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyectos = data.proyectos;
      this.imagen = data.imagen;
    })
  }

}
