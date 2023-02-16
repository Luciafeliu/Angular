import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/componentes/entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  experienciaForm: FormGroup;
  experiencia: Experiencia []=[];

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){
    this.experienciaForm = this.formBuilder.group({
      area : ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      fin : ['', [Validators.required]],
      inicio : ['', [Validators.required]],
      titulo : ['', [Validators.required]],
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
  

  get areaExp(){
    return this.experienciaForm.get("areaExperiencia");
  }

  get descripcionExp(){
    return this.experienciaForm.get("Descripcion");
  }

  get finExp(){
    return this.experienciaForm.get("fin");
  }

  get inicioExp(){
    return this.experienciaForm.get("inicio");
  }

  get tituloExp(){
    return this.experienciaForm.get("Titulo");
  }

  limpiar(): void{
    this.experienciaForm.reset(); 
  }

  agregarExperiencia():void{
    this.experienciaService.save(this.experienciaForm.value).subscribe(data => {
      alert("Experiencia creada");
      window.location.reload();
    }, err => {
      alert ("Se ha producido un error intentando crear la experiencia, por favor intente nuevamente.");
    });
  }

}
