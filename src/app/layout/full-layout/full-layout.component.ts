import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(private router: Router,  private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }
  dash_fun_GoComponent(option:string):void
  {
    if(option == '1')
    {
      this.router.navigate(['/asesores/cargar-datos'], { skipLocationChange: false });
    }

    if(option == '2')
    {
      this.router.navigate(['/asesores/zoom'], { skipLocationChange: false });
    }

    if(option == '3')
    {
      this.router.navigate(['/asesores/visitas'], { skipLocationChange: false });
    }

    if(option == '5')
    {
      this.router.navigate(['/asesores/visitas'], { skipLocationChange: false });
    }

    if(option == '6')
    {
      this.router.navigate(['/administradores/reportes'], { skipLocationChange: false });
    }

    if(option == '7')
    {
      this.router.navigate(['/administradores/reportes-graficos'], { skipLocationChange: false });
    }
    if(option == '8')
    {
      this.router.navigate(['/asesores/zoom/participantes'], { skipLocationChange: false });
    }
   
    
  }
  dash_fun_Logout():void
  {            
    sessionStorage.removeItem('ses_admin_logged');    

    this.router.navigate(['/auth/login'], { skipLocationChange: false });
  }
}
