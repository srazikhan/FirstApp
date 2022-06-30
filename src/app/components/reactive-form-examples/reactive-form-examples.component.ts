import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-examples',
  templateUrl: './reactive-form-examples.component.html',
  styleUrls: ['./reactive-form-examples.component.scss']
})
export class ReactiveFormExamplesComponent implements OnInit {
  signUpFrom!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb: FormBuilder) {

    //creating from using FormGroup() and  FormControl()
    // this.signUpFrom = new FormGroup({
    //   firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    //   lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    // })

    //creating from using FormBuilder Service
    this.signUpFrom = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })
  }

  ngOnInit(): void {
    //this.updateBySetValue();
    this.updateByPatchValue();

    //we can also update form control value individually using patchValue()
    // this.signUpFrom.get('email')?.patchValue('sajjad@gmail.com');
    // this.signUpFrom.get('lastName')?.patchValue('Razi');

    //we can also update form control
    //this.signUpFrom.get('lastName')?.setValue('Razi');
  }

  updateBySetValue() {
    this.signUpFrom.setValue({
      "firstName": "sajjad",
      "lastName": "razi",
      "email": "sajjad@gmail.com",
      "password": "admin123",
    })
  }
  updateByPatchValue() {
    this.signUpFrom.patchValue({
      "email": "sajjad@gmail.com"
    })
  }
  get f() {
    return this.signUpFrom.controls
  }
  createAccount() {
    console.log('form is submitted');
    this.isSubmitted = true;
    console.log(this.signUpFrom.valid);
    if (!this.signUpFrom.valid) return

    console.log(this.signUpFrom.value);
  }

}
