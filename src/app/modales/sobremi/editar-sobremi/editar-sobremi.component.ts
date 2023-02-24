import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/componentes/entidades/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-sobremi',
  templateUrl: './editar-sobremi.component.html',
  styleUrls: ['./editar-sobremi.component.css']
})
export class EditarSobremiComponent implements OnInit {
  personaForm: FormGroup;
  persona: Persona []=[];

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private sPersona: PersonaService){
    this.personaForm = this.formBuilder.group({
      id:[1] ,
      apellido : ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      imagen : ['', [Validators.required]],
      ocupacion : ['', [Validators.required]],
      nombre : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.cargarPersona();
    }
  
    public cargarPersona(): void {
      this.sPersona.list().subscribe(data => {this.persona=data});
    }


    get id(){
      return this.personaForm.get("id");
    }
  
    get descripcion(){
      return this.personaForm.get("descripcion");
    }

    get imagen(){
      return this.personaForm.get("imagen");
    }

    get ocupacion(){
      return this.personaForm.get("ocupacion");
    }
  
    get nombre(){
      return this.personaForm.get("nombre");
    }

    get apellido(){
      return this.personaForm.get("apellido");
    }
  
    cargarDetalle(id: number) {
      this.sPersona.detail(id).subscribe(
        {
          next: (data) => {
            this.personaForm.setValue(data);
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
      let exp = this.personaForm.value;
      console.log()
  
      if (exp.id == '') {
        alert("La persona no existe");
            this.personaForm.reset();
      } else {
        this.sPersona.update(exp).subscribe(
          data => {
            alert("Persona editada");
            this.cargarPersona();
            this.personaForm.reset();
            window.location.reload();
          }
        )
      }
    }
  
  
}
