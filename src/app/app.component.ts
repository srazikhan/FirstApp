import { Component } from '@angular/core';
import {environment} from '../environments/environment'
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent {
  constructor(private authService:AuthService){
    console.log(environment);
    this.authService.welcomeMessage();
  }
  title = 'FirstApp';
}
