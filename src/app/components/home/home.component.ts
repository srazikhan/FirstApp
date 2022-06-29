import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  address:string = "Hyderabad Telangana 50045";
  countries:string[] =['india','America'];
  imgTitle:string = "image ex";
  imgUrl:string = "https://static.digit.in/product/284c81498a93a82db7b5db6600494c20bee4f18e.jpeg";
  imgAlt:string = "Image";
  myInput:string = '';
  blogDes:any = ``;
  constructor(private authService:AuthService,private domSanitizer:DomSanitizer) {
    this.authService.welcomeMessage();
  }

  ngOnInit(): void {
    let bData = `<html><h2>Hello</h2>`;
    this.blogDes = this.domSanitizer.bypassSecurityTrustHtml(bData);
  }

  showMessage(countries:any){
    console.log("Welcome Good Morning");
    this.myInput = 'Welcome Good Morning';
    console.log(countries);
  }

}
