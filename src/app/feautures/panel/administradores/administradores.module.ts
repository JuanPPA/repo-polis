import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { InicioAdComponent } from './inicio-ad/inicio-ad.component';
import { ReporteAsComponent } from './reporte-as/reporte-as.component';
import { GraficosAsComponent } from './graficos-as/graficos-as.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [ 

  { 
    path: '',
    component: InicioAdComponent,    
    children: [ 
      {
        path: 'reportes',
        component: ReporteAsComponent,
        data: { title: 'Bienvenido', breadcrumb: 'Bienvenido' },
      },
      {
        path: 'reportes-graficos',
        component: GraficosAsComponent,
        data: { title: 'Listado de Usuarios', breadcrumb: 'Usuarios' },
      },     
        
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },


];


@NgModule({
  declarations: [ 
    ReporteAsComponent,
    GraficosAsComponent,
    InicioAdComponent,
    
    ],
  imports: [
    CommonModule,NgxChartsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    NgxChartsModule
  ]
})

export class AdministradoresModule { }