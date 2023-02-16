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

  delete(id?: number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
          alert("Se ha eliminado la habilidad correctamente");
          window.location.reload();
        }, err => {
          alert("No se ha podido eliminar la habilidad");
        }
      )
    }
  }

}
