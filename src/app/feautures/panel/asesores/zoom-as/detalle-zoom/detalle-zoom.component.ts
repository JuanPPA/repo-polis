import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-zoom',
  templateUrl: './detalle-zoom.component.html',
  styleUrls: ['./detalle-zoom.component.css']
})
export class DetalleZoomComponent implements OnInit {
  datos:any = localStorage.getItem("");
  constructor() { }

  ngOnInit(): void {
    console.log(this.datos);
    
  }

}
