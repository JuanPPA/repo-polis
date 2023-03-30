import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CargaDatosAsComponent } from './carga-datos-as/carga-datos-as.component';
import { ZoomAsComponent } from './zoom-as/zoom-as.component';
import { VisitasAsComponent } from './visitas-as/visitas-as.component';
import { SeparacionAsComponent } from './separacion-as/separacion-as.component';
import { InicioAsComponent } from './inicio-as/inicio-as.component';
import { SharedModule } from './../../../shared/shared.module';
import { DetalleZoomComponent } from './zoom-as/detalle-zoom/detalle-zoom.component';
import { DetalleVisitasComponent } from './visitas-as/detalle-visitas/detalle-visitas.component';
import { GeneSepVisitasComponent } from './visitas-as/gene-sep-visitas/gene-sep-visitas.component';
import { DetalleZoomNuevoComponent } from './zoom-as/detalle-zoom-nuevo/detalle-zoom-nuevo.component';
import { GeneSepVisitasNuevoComponent } from './visitas-as/gene-sep-visitas-nuevo/gene-sep-visitas-nuevo.component';
import { DetalleVisitasNuevoComponent } from './visitas-as/detalle-visitas-nuevo/detalle-visitas-nuevo.component';
import { CargaDatosAsNuevoComponent } from './carga-datos-as-nuevo/carga-datos-as-nuevo.component';
import { ListadoVisitantesZoomComponent } from './zoom-as/listado-visitantes-zoom/listado-visitantes-zoom.component';

const routes: Routes = [ 

  { 
    path: '',
    component: InicioAsComponent,    
    children: [ 
      {
        path: 'cargar-datos',
        component: CargaDatosAsComponent,
        data: { title: 'Bienvenido', breadcrumb: 'Bienvenido' },
      },
      {
        path: 'zoom',
        component: ZoomAsComponent,
        data: { title: 'Listado de Usuarios', breadcrumb: 'Usuarios' },
      },
      {
        path: "zoom/detalle",
        component: DetalleZoomComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      {
        path: "visitas",
        component: VisitasAsComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      {
        path: "visitas/detalle",
        component: DetalleVisitasComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      {
        path: "visitas/separacion",
        component: GeneSepVisitasComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },

      //
      {
        path: "zoom/detalle-nuevo",
        component: DetalleZoomNuevoComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      }, 
      {
        path: "visitas/detalle-nuevo",
        component: DetalleVisitasNuevoComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      {
        path: "visitas/separacion-nuevo",
        component: GeneSepVisitasNuevoComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      {
        path: "cargar-datos-detalle",
        component: CargaDatosAsNuevoComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      {
        path: "zoom/participantes",
        component: ListadoVisitantesZoomComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
      
      
        
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },


];


@NgModule({
  declarations: [ 
    InicioAsComponent,   
    CargaDatosAsComponent,
    ZoomAsComponent,
    VisitasAsComponent,
    SeparacionAsComponent,
    DetalleZoomComponent,
    DetalleVisitasComponent,
    GeneSepVisitasComponent,
    DetalleZoomNuevoComponent,
    GeneSepVisitasNuevoComponent,
    DetalleVisitasNuevoComponent,
    CargaDatosAsNuevoComponent,
    ListadoVisitantesZoomComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AsesoresModule { }
