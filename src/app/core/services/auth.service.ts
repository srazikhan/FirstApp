import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  welcomeMessage(){
    console.log("Data is coming from auth service")
  }
  
  logoutUser(){
    sessionStorage.removeItem('activeUser');
    this.router.navigate(['/auth/login'])
  }

  isLoggedIn():boolean{
    if(sessionStorage.getItem('activeUser') != null){
      return true
    }else{
      return false
    }
  }
  
  getActiveUser(){
    return JSON.parse(sessionStorage.getItem('activeUser') || '{}')
  }
}
