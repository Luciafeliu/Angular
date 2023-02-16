import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/componentes/entidades/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  habilidadForm: FormGroup;
  habilidad: Habilidad []=[];

  constructor(private habilidadService: HabilidadService, private formBuilder: FormBuilder, private sHabilidad: HabilidadService){
    this.habilidadForm = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      procentaje : ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarHabilidad();
    }
  
    
  public cargarHabilidad(): void {
    this.sHabilidad.list().subscribe(data => {this.habilidad=data});
    }

  get idHab(){
    return this.habilidadForm.get("id");
  }
  

  get nombreHab(){
    return this.habilidadForm.get("Nombre de la Habilidad");
  }

  get procentajeHab(){
    return this.habilidadForm.get("Porcentaje de la Habilidad");
  }

  limpiar(): void{
    this.habilidadForm.reset(); 
  }

  agregarHabilidad():void{
    this.habilidadService.save(this.habilidadForm.value).subscribe(data => {
      alert("Habilidad agregada");
      window.location.reload();
    }, err => {
      alert ("Se ha producido un error intentando agregar la habilidad, por favor intente nuevamente.");
    });
  }


}
