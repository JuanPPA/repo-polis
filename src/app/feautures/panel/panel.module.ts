import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosPanelComponent } from './usuarios-panel/usuarios-panel.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { InicioPanelComponent } from './inicio-panel/inicio-panel.component';
import { SaludoPanelComponent } from './saludo-panel/saludo-panel.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// import { CargaDatosAsComponent } from './asesores/carga-datos-as/carga-datos-as.component';
// import { ZoomAsComponent } from './asesores/zoom-as/zoom-as.component';
// import { VisitasAsComponent } from './asesores/visitas-as/visitas-as.component';
// import { SeparacionAsComponent } from './asesores/separacion-as/separacion-as.component';

const routes: Routes = [ 

  { 
    path: '',
    component: InicioPanelComponent,    
    children: [ 
      {
        path: 'bienvenido',
        component: SaludoPanelComponent,
        data: { title: 'Bienvenido', breadcrumb: 'Bienvenido' },
      },
      {
        path: 'usuarios',
        component: UsuariosPanelComponent,
        data: { title: 'Listado de Usuarios', breadcrumb: 'Usuarios' },
      },
      {
        path: "control",
        component: ControlPanelComponent,
        data: { title: 'Control de Personal', breadcrumb: 'Control-Personal' },

      },
        
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },


];


@NgModule({
  declarations: [ 
    InicioPanelComponent,
    UsuariosPanelComponent,
    ControlPanelComponent,
    SaludoPanelComponent,
    // CargaDatosAsComponent,
    // ZoomAsComponent,
    // VisitasAsComponent,
    // SeparacionAsComponent,
    ],
  imports: [
    CommonModule,NgxChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class PanelModule { }
