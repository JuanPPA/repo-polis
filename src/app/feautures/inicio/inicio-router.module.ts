import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { InicioComponent } from './inicio.component';


const routes: Routes = [

  { path:'inicio', component: InicioComponent}, 


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InicioRouterModule { }
