import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-habilidadesadmin',
  templateUrl: './habilidadesadmin.component.html',
  styleUrls: ['./habilidadesadmin.component.css']
})
export class HabilidadesadminComponent implements OnInit{
  skills: any;
  porcentaje : any;
  constructor(private datos: DatosService){ }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.skills = data.habilidades;
      this.porcentaje = data.porcentaje;
    })
  }

}
