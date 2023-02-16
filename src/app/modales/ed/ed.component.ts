import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/componentes/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.css']
})
export class EdComponent implements OnInit{
  educacionForm: FormGroup;
  educacion: Educacion []=[];

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private sEducacion: EducacionService){
    this.educacionForm = this.formBuilder.group({
      descripcion : ['', [Validators.required]],
      estado : ['', [Validators.required]],
      fin : ['', [Validators.required]],
      inicio : ['', [Validators.required]],
      institucion : ['', [Validators.required]],
      titulo : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.cargarEstudio();
    }
  
    public cargarEstudio(): void {
      this.sEducacion.list().subscribe(data => {this.educacion=data});
    }

    get idEd(){
      return this.educacionForm.get("id");
    }
  
    get descripcionEd(){
      return this.educacionForm.get("Descripcion");
    }

    get estadoEd(){
      return this.educacionForm.get("Estado");
    }
  
    get finEd(){
      return this.educacionForm.get("fin");
    }
  
    get inicioEd(){
      return this.educacionForm.get("inicio");
    }

    get institucionEd(){
      return this.educacionForm.get("Institucion");
    }
  
    get tituloEd(){
      return this.educacionForm.get("Titulo");
    }
  
    limpiar(): void{
      this.educacionForm.reset(); 
    }
  
    agregarEstudio():void{
      this.educacionService.save(this.educacionForm.value).subscribe(data => {
        alert("Educacion creada");
        window.location.reload();
      }, err => {
        alert ("Se ha producido un error intentando crear la educacion, por favor intente nuevamente.");
      });
    }

}
