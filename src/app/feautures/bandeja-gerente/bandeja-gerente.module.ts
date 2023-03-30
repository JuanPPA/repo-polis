import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseGerenteComponent } from './base-gerente/base-gerente.component';
import { AsignacionGerenteComponent } from './asignacion-gerente/asignacion-gerente.component';
import { CorreosGerenteComponent } from './correos-gerente/correos-gerente.component';

const routes: Routes = [ 

  { 
    path: '',
    component: BaseGerenteComponent,    
    children: [ 
      {
        path: 'correos',
        component: CorreosGerenteComponent,
        data: { title: 'correos', breadcrumb: 'correos' },
      },
      {
        path: 'asignacion', 
        component: AsignacionGerenteComponent,
        data: { title: 'asignacion', breadcrumb: 'asignacion' },
      },     
        
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },


];

@NgModule({
  declarations: [
    BaseGerenteComponent,
    AsignacionGerenteComponent,
    CorreosGerenteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BandejaGerenteModule { }
