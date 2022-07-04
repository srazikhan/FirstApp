import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/interceptors/auth.interceptor';
import { HttpErrorInterceptor } from '../core/interceptors/http-error.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';

const CModuleList = [
  FormsModule,
  NgxChartsModule,
  ReactiveFormsModule,
  HttpClientModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CModuleList,
    ToastrModule.forRoot(),
  ],
  exports: [
    CModuleList
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    ToastrService
  ],
})
export class SharedModule { }
