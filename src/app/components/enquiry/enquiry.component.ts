import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
})
export class EnquiryComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked,OnDestroy {
  enquiryList:any[]=[];
  selectedItem:any;
  dataComingFromChild:any;
  constructor() {
    
  }

  ngOnInit(): void {
    this.getEnquiry();
    localStorage.setItem('userId','1234234234234');
  }

  ngDoCheck(): void {
    console.log("ngDoCheck is executed")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is executed")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is executed")
  }

  getEnquiry(){
    const cDate = new Date();
    this.enquiryList = [
      {id:1,enquiryFor:'Laptop',comment:'i want to know price at offer',createdAt:cDate},
      {id:1,enquiryFor:'Computer',comment:'i want to know price of Computer at offer',createdAt:cDate},
      {id:1,enquiryFor:'Mobile',comment:'i want to know the price of Mobile at offer',createdAt:cDate},
    ]
  }

  viewDetails(item:any){
    console.log(item);
    this.selectedItem = item;
  }

  receiveData(event:any){
    // console.log("*************888");
    // console.log(event);
    this.dataComingFromChild = event;
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is executed');
    localStorage.clear();
  }
}
