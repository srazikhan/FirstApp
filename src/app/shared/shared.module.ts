import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const CModuleList = [
  FormsModule,
  NgxChartsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CModuleList
  ],
  exports:[
    CModuleList
  ]
})
export class SharedModule { }
