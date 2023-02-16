import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../entidades/experiencia'; 
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia []=[];

  constructor(private sExperiencia: ExperienciaService){ }

  ngOnInit(): void {
  this.cargarExperiencia();
  }

  

  public cargarExperiencia(): void {
    this.sExperiencia.list().subscribe(data => {this.experiencia=data});
  }

}
