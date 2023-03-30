import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zoom-as',
  templateUrl: './zoom-as.component.html',
  styleUrls: ['./zoom-as.component.css']
})
export class ZoomAsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  dash_fun_GoComponent(valor: any): void {

    switch (valor) {
      case 0:
        this.router.navigate(['/asesores/cargar-datos-detalle'], { skipLocationChange: false });

        break;
      case 1:
        this.router.navigate(['/asesores/zoom/detalle'], { skipLocationChange: false });

        break;
      case 2:
        this.router.navigate(['/asesores/visitas/detalle'], { skipLocationChange: false });

        break;
      case 3:
        this.router.navigate(['/asesores/visitas/separacion'], { skipLocationChange: false });

        break;
      case 4:
        this.router.navigate(['/asesores/cargar-datos'], { skipLocationChange: false });
        break;
      //Registro Directos
      case 5:
        this.router.navigate(['/asesores/zoom/detalle-nuevo'], { skipLocationChange: false });
        break;

      case 6:
        this.router.navigate(['/asesores/visitas/detalle-nuevo'], { skipLocationChange: false });
        break;

      case 7:
        this.router.navigate(['/asesores/visitas/separacion-nuevo'], { skipLocationChange: false });
        break;

    }



  }
}
