import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from '../../entidades/experiencia';


@Component({
  selector: 'app-expadmin',
  templateUrl: './expadmin.component.html',
  styleUrls: ['./expadmin.component.css']
})
export class ExpadminComponent implements OnInit{
 
  experiencia: Experiencia []=[];

  constructor(private sExperiencia: ExperienciaService){ }

  ngOnInit(): void {
  this.cargarExperiencia();
  }

  public cargarExperiencia(): void {
    this.sExperiencia.list().subscribe(data => {this.experiencia=data});
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Se ha eliminado la experiencia correctamente");
          window.location.reload();
        }, err => {
          alert("No se ha podido eliminar la experiencia");
        }
      )
    }
  }
  

}