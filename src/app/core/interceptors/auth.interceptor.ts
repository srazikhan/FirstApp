import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor is executed");
    const activeUser:any = this.authService.getActiveUser();
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer ${activeUser.token}`,
        designation: `Developer`
      }
    })
    return next.handle(request);
  }
}
