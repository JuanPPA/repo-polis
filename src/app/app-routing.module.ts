import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

const routes: Routes = [

    { path: '',
      redirectTo:'/auth/login',  
      pathMatch:'full'
    },

    { path: "auth", 
    loadChildren:()=> 
    import('./feautures/auth/components.module').then((m)=> m.ComponentsModule)},

    { path: "",
    component:FullLayoutComponent,
    children:[
     {
      path:'panel',
      loadChildren:()=> 
      import('./feautures/panel/panel.module').then((m)=> m.PanelModule)
     },

     {
      path:'bandeja',
      loadChildren:()=> 
      import('./feautures/bandeja-gerente/bandeja-gerente.module').then((m)=> m.BandejaGerenteModule)
     },
     {
      path:'asesores',
      loadChildren:()=>
      import('./feautures/panel/asesores/asesores.module').then((m)=> m.AsesoresModule)

     },
     {
      path:'administradores',
      loadChildren:()=>
      import('./feautures/panel/administradores/administradores.module').then((m)=> m.AdministradoresModule)

     }
     
    ]
    },

    {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
