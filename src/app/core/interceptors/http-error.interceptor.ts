import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Error Interceptor is executed')
    return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>{
      return this.handleHttpError(error);
    }));
  }

  handleHttpError(error: HttpErrorResponse) {
    let errorInfo = '';
    if (error.error instanceof ErrorEvent) {
      errorInfo = `Client Side Error ${error.message}`
    } else {
      errorInfo = `Server Side Error -Status ${error.status}- MSG ${error.message}`;
      switch(error.status){
        case 404:
          this.toastr.error('invalid API')
          break
        case 500:
          this.toastr.error('Internel Server Error')
          break
        case 401:
          this.toastr.error('unauthorized');
          break
        default:
          this.toastr.error('Unknown Error');
      }
    }
    console.log(errorInfo)
    return throwError(errorInfo)
  }
}
