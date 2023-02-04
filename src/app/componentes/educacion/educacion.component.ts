import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../entidades/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion: Educacion []=[];

  constructor(private sEducacion: EducacionService){ }

  ngOnInit(): void {
  this.cargarEstudio();
  }

  

  public cargarEstudio(): void {
    this.sEducacion.list().subscribe(data => {this.educacion=data});
  }

}
