import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
type Fruit = Array<{ 
    asistio: string;
    documento: string; 
    datos: string;
    fecha: string;
    direccion: string;
  }>;
@Component({
  selector: 'app-visitas-as',
  templateUrl: './visitas-as.component.html',
  styleUrls: ['./visitas-as.component.css']
})
export class VisitasAsComponent implements OnInit {
  datos: Fruit = [
    { asistio:'true',documento:'77151125',datos:'Carlos Gomez',fecha:'07/02/2023',direccion:'Av Petituars 115' },
    { asistio:'false',documento:'77895585',datos:'Alexander Perez',fecha:'07/02/2023',direccion:'Av Grau 11511' },
    { asistio:'true',documento:'22125151',datos:'Juan Bonifa',fecha:'07/02/2023',direccion:'Av Leoncio Prado 111' },
    { asistio:'false',documento:'00154841',datos:'Chester Ferrari',fecha:'07/02/2023',direccion:'Av Huacho 12111' },

  ];
  buscar:any = '1'

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  dash_fun_GoComponent():void
  {
  
      this.router.navigate(['/asesores/visitas/detalle'], { skipLocationChange: false });  

    
  }
  dash_fun_GoComponent1():void
  {
  
      this.router.navigate(['/asesores/visitas/separacion'], { skipLocationChange: false });  

    
  }
}
