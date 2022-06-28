import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concat, forkJoin, from, interval, merge, Observable, of, range, Subject, Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-observable-examples',
  templateUrl: './observable-examples.component.html',
  styleUrls: ['./observable-examples.component.scss']
})
export class ObservableExamplesComponent implements OnInit {
  userList: any;
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

  observableEx() {
    //creating observable using from operator
    // const obsByFrom = from(['sajjad','razi']);
    // obsByFrom.subscribe((res:any)=>{
    //   console.log(res)
    // })

    //creating observable using of operator
    // const obsByOf1 = of(123,344,567);
    // obsByOf1.subscribe((res:any)=>{
    //   console.log(res)
    // })

    //creating observable using range operator
    //  const obsByRange = range(1,10);
    //  obsByRange.pipe(map(el => el+2)).subscribe((res:any)=>{
    //    console.log(res)
    //  })

    //creating observable using interval operator
    //  const obsByInterVel = interval(1000);
    // const timeSub:Subscription = obsByInterVel.subscribe((res:any)=>{
    //    console.log(res)
    //    if(res == 10){
    //     timeSub.unsubscribe();
    //    }
    //  })

    //creating observable using timer operator
    //  const obsByIimer = timer(5000);
    //   obsByIimer.subscribe((res:any)=>{
    //    console.log("i am good" + res)
    //  })


    //creating observable using ajax operator
    //  const obsByAjax = ajax('https://jsonplaceholder.typicode.com/posts');
    //  obsByAjax.subscribe((res:any)=>{
    //    console.log(res.response)
    //    this.userList = res.response
    //  })

    //merging observable using concat operator
    // const sequence1 = range(1, 10);
    // const sequence2 = range(12, 20);
    // const result = concat(sequence1, sequence2);
    // result.subscribe((res:any)=>{
    //   console.log(res)
    // })

    //merging observable using forkjoin operator
    // const obs1 = ajax('https://jsonplaceholder.typicode.com/posts');
    // const obs2 = ajax('https://jsonplaceholder.typicode.com/posts');
    // const result = forkJoin([obs1,obs2]);
    // result.subscribe((res:any)=>{
    //   console.log(res)
    // })

  //merging observable using merge operator
    // const myrange1 = range(0, 5);
    // const myrange2 = range(10, 20);
    // const merged = merge(myrange1, myrange2);
    // merged.subscribe(x => console.log(x));

     //creating observable using subject operator
    const sub1 = new Subject();
    const sub2 = new BehaviorSubject<any>('I m good');

    sub1.subscribe((res:any)=>{
      console.log("***"+res)
    })

    sub2.subscribe((res:any)=>{
      console.log(res)
    })
   
  }



}
