import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,  private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }
  dash_fun_GoComponent(option:string):void
  {
    if(option == '1')
    {
      this.router.navigate(['/dashboard/proyecto'], { skipLocationChange: false });
    }

    if(option == '2')
    {
      this.router.navigate(['/dashboard/documento'], { skipLocationChange: false });
    }

    if(option == '3')
    {
      this.router.navigate(['/dashboard/notificacion'], { skipLocationChange: false });
    }

    if(option == '5')
    {
      this.router.navigate(['/dashboard/seguimiento'], { skipLocationChange: false });
    }

    if(option == '6')
    {
      this.router.navigate(['/dashboard/usuario'], { skipLocationChange: false });
    }

    if(option == '7')
    {
      this.router.navigate(['/dashboard/perfil'], { skipLocationChange: false });
    }

    if(option == '8')
    {
      this.router.navigate(['/dashboard/zona'], { skipLocationChange: false });
    }

    if(option == '9')
    {
      this.router.navigate(['/dashboard/ubigeo'], { skipLocationChange: false });
    }

    if(option == '10')
    {
      this.router.navigate(['/dashboard/empresa-supervisora'], { skipLocationChange: false });
    }
    if(option == '11')
    {
      this.router.navigate(['/dashboard/obligaciones-consumidor'], { skipLocationChange: false });
    }
  }
  dash_fun_Logout():void
  {            
    sessionStorage.removeItem('ses_admin_logged');    

    this.router.navigate(['/mensaje'], { skipLocationChange: false });
  }
}
