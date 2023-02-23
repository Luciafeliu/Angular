import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/componentes/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit{
  experienciaForm: FormGroup;
  experiencia: Experiencia []=[];

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){
    this.experienciaForm = this.formBuilder.group({
      id:[''] ,
      area : ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      inicio : ['', [Validators.required]],
      fin : ['', [Validators.required]],
      titulo : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    }
  
    public cargarExperiencia(): void {
      this.sExperiencia.list().subscribe(data => {this.experiencia=data});
    }


    get idExp(){
      return this.experienciaForm.get("id");
    }
  
    get area(){
      return this.experienciaForm.get("area");
    }

    get descripcion(){
      return this.experienciaForm.get("descripcion");
    }
  
    get fin(){
      return this.experienciaForm.get("fin");
    }
  
    get inicio(){
      return this.experienciaForm.get("inicio");
    }
  
    get titulo(){
      return this.experienciaForm.get("Titulo");
    }
  
    editarExperiencia():void{
      this.experienciaService.update(this.experienciaForm.value).subscribe(data => {
        this.cargarExperiencia();
        this.experienciaForm.reset;
        alert("Educacion actualizada");
        window.location.reload();
      }, err => {
        alert ("Se ha producido un error intentando actualizar la experiencia, por favor intente nuevamente.");
      });
    }
}
