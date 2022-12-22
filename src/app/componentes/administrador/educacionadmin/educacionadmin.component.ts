import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educacionadmin',
  templateUrl: './educacionadmin.component.html',
  styleUrls: ['./educacionadmin.component.css']
})
export class EducacionadminComponent implements OnInit{
  educaciones: any;
  nombresito : string = '';
  fecha : any;
  constructor(private datos: DatosService){ }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.educaciones = data.estudios;
      this.nombresito = data.nombre;
    })
  }

}
