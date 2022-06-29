import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-examples',
  templateUrl: './reactive-form-examples.component.html',
  styleUrls: ['./reactive-form-examples.component.scss']
})
export class ReactiveFormExamplesComponent implements OnInit {
  signUpFrom!:FormGroup;
  constructor() { 
    this.signUpFrom = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  createAccount(){
    console.log('form is submitted');
    console.log(this.signUpFrom.value);
  }

}
