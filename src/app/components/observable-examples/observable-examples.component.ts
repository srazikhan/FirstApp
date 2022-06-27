import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-observable-examples',
  templateUrl: './observable-examples.component.html',
  styleUrls: ['./observable-examples.component.scss']
})
export class ObservableExamplesComponent implements OnInit {

  constructor() { 
    // const obs1 = new Observable((observer)  => {
    //   observer.next(42);
    //   observer.next(100);
    //   observer.next(200);
    // });

    // obs1.subscribe((res:any)=>{
    //   console.log("OBS=== "+res)
    // })

  }

  ngOnInit(): void {
  this.observableEx();
  }

  observableEx(){
    const obsByOf1 = of(123,344,567);
    const obsByOf2= of("hi","bye","hello");
    obsByOf1.subscribe((res:any)=>{
      console.log(res)
    })
    obsByOf2.subscribe((res:any)=>{
      console.log(res)
    })
  }

}
