import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  welcomeMessage(){
    console.log("Data is coming from auth service")
  }
  
}
