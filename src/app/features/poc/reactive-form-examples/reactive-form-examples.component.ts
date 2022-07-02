import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-examples',
  templateUrl: './reactive-form-examples.component.html',
  styleUrls: ['./reactive-form-examples.component.scss']
})
export class ReactiveFormExamplesComponent implements OnInit {
  signUpFrom!: FormGroup;
  productFrom!: FormGroup;
  isSubmitted: boolean = false;
  submitted: boolean = false;
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

    this.productFrom = this.fb.group({
      category: ['', [Validators.required, Validators.maxLength(10)]],
      productItem: this.fb.array([this.createItem()])
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

  get f() {
    return this.signUpFrom.controls
  }
  get pf() {
    return this.productFrom.controls
  }
  get pitems(){
    return this.productFrom.controls['productItem'] as FormArray;
  }
  createItem():FormGroup{
    return this.fb.group({
      productName: ['',[Validators.required]],
      productPrice: ['',[Validators.required]],
    })
  }

  addNewProduct(){
    console.log(this.pitems.length)
    if(this.pitems.length <= 5){
      this.pitems.push(this.createItem())
    }else{
      alert('You are not allowed to add more than 5 product at a time')
    }
  }
  removeProduct(index:number){
    this.pitems.removeAt(index);
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


  createAccount() {
    console.log('form is submitted');
    this.isSubmitted = true;
    // console.log(this.signUpFrom.valid);
  
    if (!this.signUpFrom.valid) return

    console.log(this.signUpFrom.value);
  }

  createProduct() {
    console.log('form is submitted');
    this.submitted = true;
    // console.log(this.productFrom.valid);
    if (!this.productFrom.valid) return

    console.log(this.productFrom.value);
  }

}
