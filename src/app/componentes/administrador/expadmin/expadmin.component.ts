import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-expadmin',
  templateUrl: './expadmin.component.html',
  styleUrls: ['./expadmin.component.css']
})
export class ExpadminComponent implements OnInit{
  experiencies: any;
  nombresito : string = '';
  fecha : any;
  constructor(private datos: DatosService){ }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experiencies = data.experiencias;
      this.nombresito = data.nombre;
    })
  }

}