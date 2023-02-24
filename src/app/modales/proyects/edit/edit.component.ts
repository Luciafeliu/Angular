import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/componentes/entidades/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  proyectoForm: FormGroup;
  proyecto: Proyecto []=[];

  constructor(private proyectoService: ProyectoService, private formBuilder: FormBuilder, private sProyecto: ProyectoService){
    this.proyectoForm = this.formBuilder.group({
      id:[''] ,
      descripcion : ['', [Validators.required]],
      imagen : ['', [Validators.required]],
      nombre : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.cargarProyecto();
    }
  
    public cargarProyecto(): void {
      this.sProyecto.list().subscribe(data => {this.proyecto=data});
    }


    get id(){
      return this.proyectoForm.get("id");
    }
  
    get descripcion(){
      return this.proyectoForm.get("Descripcion");
    }

    get imagen(){
      return this.proyectoForm.get("imagen");
    }
  
    get nombre(){
      return this.proyectoForm.get("nombre");
    }
  
    cargarDetalle(id: number) {
      this.sProyecto.detail(id).subscribe(
        {
          next: (data) => {
            this.proyectoForm.setValue(data);
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
      let exp = this.proyectoForm.value;
      console.log()
  
      if (exp.id == '') {
        this.proyectoService.save(exp).subscribe(
          data => {
            alert("Su nuevo proyecto fue añadido correctamente");
            this.cargarProyecto();
            this.proyectoForm.reset();
          }
        )
      } else {
        this.sProyecto.update(exp).subscribe(
          data => {
            alert("Proyecto editado");
            this.cargarProyecto();
            this.proyectoForm.reset();
            window.location.reload();
          }
        )
      }
    }
  
  
}
