import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from '../../entidades/habilidad';


@Component({
  selector: 'app-habilidadesadmin',
  templateUrl: './habilidadesadmin.component.html',
  styleUrls: ['./habilidadesadmin.component.css']
})
export class HabilidadesadminComponent implements OnInit{
  habilidad : Habilidad []=[];

  constructor(private sHabilidad: HabilidadService){ }

  ngOnInit(): void {
  this.cargarHabilidad();
  }

  public cargarHabilidad(): void {
    this.sHabilidad.list().subscribe(data => {this.habilidad=data});
  }

}
