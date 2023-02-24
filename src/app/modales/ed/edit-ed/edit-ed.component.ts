import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/componentes/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-ed',
  templateUrl: './edit-ed.component.html',
  styleUrls: ['./edit-ed.component.css']
})
export class EditEdComponent implements OnInit{
  educacionForm: FormGroup;
  educacion: Educacion []=[];

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private sEducacion: EducacionService){
    this.educacionForm = this.formBuilder.group({
      id:[''] ,
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
  
    cargarDetalle(id: number) {
      this.sEducacion.detail(id).subscribe(
        {
          next: (data) => {
            this.educacionForm.setValue(data);
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
      let exp = this.educacionForm.value;
      console.log()
  
      if (exp.id == '') {
        this.educacionService.save(exp).subscribe(
          data => {
            alert("Su nueva Educación fue añadida correctamente");
            this.cargarEstudio();
            this.educacionForm.reset();
          }
        )
      } else {
        this.sEducacion.update(exp).subscribe(
          data => {
            alert("Educación editada");
            this.cargarEstudio();
            this.educacionForm.reset();
            window.location.reload();
          }
        )
      }
    }
  
  
}
