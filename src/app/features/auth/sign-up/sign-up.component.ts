import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpFrom!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb: FormBuilder,private router:Router) {

    //creating from using FormGroup() and  FormControl()
    this.signUpFrom = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    })

  }

  ngOnInit(): void {}

  get f() {
    return this.signUpFrom.controls
  }

  createAccount() {
    console.log('form is submitted');
    this.isSubmitted = true;
    if (!this.signUpFrom.valid) return
    const formData = this.signUpFrom.value;
    const alluser:any = JSON.parse(sessionStorage.getItem('users') || '{}');
    const userExist = alluser.some((el:any)=>{
      return el.email == formData.email;
    })
    if(userExist){
      alert('User alreadt exist');
    }else{
      alluser.push(formData)
      sessionStorage.setItem('users', JSON.stringify(alluser));
      alert('user created');
      this.router.navigate(['auth/login']);
    }
    // let payload = this.signUpFrom.value;
    // this.http.post('https://reqres.in/api/users', payload, {}).subscribe((res: any) => {
    //   console.log(res);
    //   console.log('user created')
    // })
  }

}
