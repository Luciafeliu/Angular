import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/componentes/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

  proyectoForm: FormGroup;
  proyecto: Proyecto []=[];

  constructor(private proyectoService: ProyectoService, private formBuilder: FormBuilder, private sProyecto: ProyectoService){
    this.proyectoForm = this.formBuilder.group({
      descripcion : ['', [Validators.required]],
      imagen : ['', [Validators.required]],
      nombre : ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.agregarProyecto();
    }
  
    
  public agregarProyecto(): void {
    this.sProyecto.list().subscribe(data => {this.proyecto=data});
    }

  get idProy(){
    return this.proyectoForm.get("id");
  }
  

  get descripcionProy(){
    return this.proyectoForm.get("Descripcion del proyecto");
  }

  get imagenProy(){
    return this.proyectoForm.get("Imagen en url del proyecto");
  }

  get nombreProy(){
    return this.proyectoForm.get("Nombre del proyecto");
  }

  limpiar(): void{
    this.proyectoForm.reset(); 
  }

  crearProyecto():void{
    this.proyectoService.save(this.proyectoForm.value).subscribe(data => {
      alert("Proyecto agregado");
      window.location.reload();
    }, err => {
      alert ("Se ha producido un error intentando agregar el proyecto, por favor intente nuevamente.");
    });
  }



}
