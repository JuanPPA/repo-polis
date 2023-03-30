import { NgModule } from '@angular/core';

import { LoginComponent } from '../../feautures/auth/login/login.component';
import { RegisterComponent } from '../../feautures/auth/register/register.component';

import { AppRoutingModule } from './components-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule
  ]
})
export class ComponentsModule { }
