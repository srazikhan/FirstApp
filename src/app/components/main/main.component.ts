import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  activeUser:any = this.authService.getActiveUser();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
