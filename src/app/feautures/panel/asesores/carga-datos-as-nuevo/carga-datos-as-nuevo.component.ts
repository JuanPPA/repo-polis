import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-datos-as-nuevo',
  templateUrl: './carga-datos-as-nuevo.component.html',
  styleUrls: ['./carga-datos-as-nuevo.component.css']
})
export class CargaDatosAsNuevoComponent implements OnInit {
  fecha:any = '2023-02-17T13:21';
  constructor() { }

  ngOnInit(): void {

  }

  click(){
    console.log(this.fecha);
    ;
  }
}
