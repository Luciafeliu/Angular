import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/componentes/entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-ed',
  templateUrl: './ed.component.html',
  styleUrls: ['./ed.component.css']
})
export class EdComponent {
  educacionForm: FormGroup;
  educacion: Educacion []=[];

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){
    this.experienciaForm = this.formBuilder.group({
      area : ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      fin : ['', [Validators.required]],
      inicio : ['', [Validators.required]],
      titulo : ['', [Validators.required]],
    })
  }

}
