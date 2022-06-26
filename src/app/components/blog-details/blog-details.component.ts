import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  details:any;
  constructor(private aRoute:ActivatedRoute) {
    this.aRoute.queryParams.subscribe((res:any)=>{
      console.log("*********");
      console.log(res);
      this.details = res;
    })
  }

  ngOnInit(): void {
  }

}
