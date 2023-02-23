import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../../entidades/educacion';

@Component({
  selector: 'app-educacionadmin',
  templateUrl: './educacionadmin.component.html',
  styleUrls: ['./educacionadmin.component.css']
})
export class EducacionadminComponent implements OnInit{
  
  educacion: Educacion []=[];

  constructor(private sEducacion: EducacionService){ }

  ngOnInit(): void {
  this.cargarEducacion();
  }

  cargarEducacion(): void{
    this.sEducacion.list().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          alert("Se ha eliminado el estudio correctamente");
          window.location.reload();
        }, err => {
          alert("No se ha podido eliminar el estudio");
        }
      )
    }
  }
  

}
