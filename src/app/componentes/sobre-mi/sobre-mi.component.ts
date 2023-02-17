import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PersonaModel } from '../entidades/persona.model';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  persona: PersonaModel []=[];

  constructor(private sPersona: PersonaService){ }

  ngOnInit(): void {
  this.cargarPersona();
  }

  public cargarPersona(): void {
    this.sPersona.list().subscribe(data => {this.persona=data});
  }


}

