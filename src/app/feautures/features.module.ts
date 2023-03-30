import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './auth/components.module';
import { InicioModule } from './inicio/inicio.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PanelModule } from './panel/panel.module';
import { BandejaGerenteModule } from './bandeja-gerente/bandeja-gerente.module';
import { AsesoresModule } from './panel/asesores/asesores.module';


@NgModule({
  declarations: [ 
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    InicioModule,
    PanelModule,
    BandejaGerenteModule,
    AsesoresModule
  ]
})
export class FeaturesModule { }
