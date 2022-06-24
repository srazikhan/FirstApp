import { Component, OnInit } from '@angular/core';
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
  constructor(private authService:AuthService) {
    this.authService.welcomeMessage();
  }

  ngOnInit(): void {
  }

  showMessage(countries:any){
    console.log("Welcome Good Morning");
    console.log(countries);
  }

}
