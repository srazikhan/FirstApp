import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('signUpFrom',{static:false}) sf:any;
  @ViewChild('saveBtn',{static:false}) saveBtn!:ElementRef;

  constructor(private renderer:Renderer2) { }
  signUpData:any = {};

  ngOnInit(): void {
  }
  createAccount(){
    console.log("form submitted");
    // console.log(this.signUpData);
    if(!this.sf.valid){
      this.renderer.setStyle(this.saveBtn.nativeElement,'background-color','red');
    }else{
      this.renderer.setStyle(this.saveBtn.nativeElement,'background-color','green');
      
    }
    console.log(this.sf.value);
  }
}
