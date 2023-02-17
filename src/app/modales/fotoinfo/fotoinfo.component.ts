import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaModel } from 'src/app/componentes/entidades/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-fotoinfo',
  templateUrl: './fotoinfo.component.html',
  styleUrls: ['./fotoinfo.component.css']
})
export class FotoinfoComponent {
  personaForm: FormGroup;
  persona: PersonaModel []=[];

  constructor(private personaService: PersonaService, private formBuilder:FormBuilder, private sPersona:PersonaService){
    this.personaForm = this.formBuilder.group({
      area : ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      fin : ['', [Validators.required]],
      inicio : ['', [Validators.required]],
      titulo : ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarDatos();
    }
  
    
  
    public cargarDatos(): void {
      this.sPersona.list().subscribe(data => {this.persona=data});
    }

  get idSM(){
    return this.personaForm.get("id");
  }
  

  get apellidoSM(){
    return this.personaForm.get("Apellido de la persona");
  }

  get descripcionSM(){
    return this.personaForm.get("Descripcion");
  }

  get nombreSM(){
    return this.personaForm.get("Nombre de la persona");
  }

  get ocupacionSM(){
    return this.personaForm.get("Ocupacion de la persona");
  }

  get imagenSM(){
    return this.personaForm.get("Url de la imagen de la persona");
  }

  limpiar(): void{
    this.personaForm.reset(); 
  }

  agregarDatos():void{
    this.personaService.save(this.personaForm.value).subscribe(data => {
      alert("Datos creados");
      window.location.reload();
    }, err => {
      alert ("Se ha producido un error intentando crear los datos, por favor intente nuevamente.");
    });
  }

}
