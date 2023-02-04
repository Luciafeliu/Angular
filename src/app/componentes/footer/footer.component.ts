import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/servicios/footer.service';
import { Footer } from '../entidades/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  footer : Footer []=[];

  constructor(private sFooter: FooterService){ }

  ngOnInit(): void {
  this.cargarFooter();
  }

  public cargarFooter(): void {
    this.sFooter.list().subscribe(data => {this.footer=data});
  }

}
