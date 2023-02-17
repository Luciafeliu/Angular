import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/servicios/banner.service';
import { Banner } from '../../entidades/banner';

@Component({
  selector: 'app-banneradmin',
  templateUrl: './banneradmin.component.html',
  styleUrls: ['./banneradmin.component.css']
})
export class BanneradminComponent implements OnInit{
  banner: any;

  constructor(private sBanner: BannerService){ }

  ngOnInit(): void {
  this.cargarBanner();
  }

  

  public cargarBanner(): void {
    this.sBanner.list().subscribe(data => {this.banner=data});
  }

}
