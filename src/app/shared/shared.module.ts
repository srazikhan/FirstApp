import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/interceptors/auth.interceptor';

const CModuleList = [
  FormsModule,
  NgxChartsModule,
  ReactiveFormsModule,
  HttpClientModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CModuleList
  ],
  exports:[
    CModuleList
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
})
export class SharedModule { }
