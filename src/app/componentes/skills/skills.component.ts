import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from '../entidades/habilidad';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  habilidad : Habilidad []=[];

  constructor(private sHabilidad: HabilidadService){ }

  ngOnInit(): void {
  this.cargarHabilidad();
  }

  public cargarHabilidad(): void {
    this.sHabilidad.list().subscribe(data => {this.habilidad=data});
  }

}
