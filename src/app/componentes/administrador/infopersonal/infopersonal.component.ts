import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PersonaModel } from '../../entidades/persona.model';

@Component({
  selector: 'app-infopersonal',
  templateUrl: './Infopersonal.component.html',
  styleUrls: ['./Infopersonal.component.css']
})
export class InfopersonalComponent implements OnInit{
  persona: PersonaModel []=[];

  constructor(private sPersona: PersonaService){ }

  ngOnInit(): void {
  this.cargarPersona();
  }

  public cargarPersona(): void {
    this.sPersona.list().subscribe(data => {this.persona=data});
  }


}
