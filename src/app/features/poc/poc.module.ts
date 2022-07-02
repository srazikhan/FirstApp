import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    PocComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule
  ]
})
export class PocModule { }
