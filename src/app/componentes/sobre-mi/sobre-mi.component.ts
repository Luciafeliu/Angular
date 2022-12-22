import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  nombre : string = '';
  apellido : string = '';
  fecha : any;
  ocupacion : string = '';
  descripcion : string = '';
  constructor(private datos: DatosService){ }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ocupacion = data.ocupacion;
      this.fecha = data.fecha;
      this.descripcion = data.descripcion;
    })
  }

}

