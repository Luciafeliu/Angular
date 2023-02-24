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
      this.sExperiencia.list().subscribe(
        data => {this.experiencia=data});
    }


    get id(){
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
      return this.experienciaForm.get("titulo");
    }

    cargarDetalle(id: number) {
      this.sExperiencia.detail(id).subscribe(
        {
          next: (data) => {
            this.experienciaForm.setValue(data);
          },
          error: (e) => {
            console.error(e)
            alert("Ha ocurrido un error al modificar")
          },
          complete: () => console.info('Completado')
        }
      )
    }
   
  
  
    guardar() {
      console.log("OK")
      let exp = this.experienciaForm.value;
      console.log()
  
      if (exp.id == '') {
        this.experienciaService.save(exp).subscribe(
          data => {
            alert("Su nueva Experiencia fue añadida correctamente");
            this.cargarExperiencia();
            this.experienciaForm.reset();
          }
        )
      } else {
        this.sExperiencia.update(exp).subscribe(
          data => {
            alert("Experiencia editada");
            this.cargarExperiencia();
            this.experienciaForm.reset();
          }
        )
      }
    }
  
  
   /* editarExperiencia():void{
      this.experienciaService.update(this.experienciaForm.value).subscribe(data => {
        this.cargarExperiencia();
        this.experienciaForm.reset;
        alert("Educacion actualizada");
        window.location.reload();
      }, err => {
        alert ("Se ha producido un error intentando actualizar la experiencia, por favor intente nuevamente.");
      });
    }*/
  } 
   


