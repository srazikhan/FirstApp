import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enquiry-details',
  templateUrl: './enquiry-details.component.html',
  styleUrls: ['./enquiry-details.component.scss']
})
export class EnquiryDetailsComponent implements OnInit,OnChanges {
  @Input() enquiryDetails:any;
  @Output() dataFromChild = new EventEmitter<any>();

  constructor(private aRoute:ActivatedRoute) {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is executed');
    console.log(changes);
  }

  ngOnInit(): void {
    
  }

  sendData(data:any){
    this.dataFromChild.emit(data);
  }

}
