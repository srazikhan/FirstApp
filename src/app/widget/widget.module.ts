import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

const WidgetModuleList = [
  MatButtonModule,
  MatDatepickerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WidgetModuleList
  ],
  exports:[
    WidgetModuleList
  ]
})
export class WidgetModule { }
