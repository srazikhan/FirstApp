import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb: FormBuilder,private router:Router) {
    //creating from using FormBuilder Service
    this.loginFrom = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })

  }

  ngOnInit(): void {
    this.createDummyUser();
  }

  createDummyUser() {
    const userList: any = [
      { id: 2, firstName: 'sajjad', lastName: 'razi', email: 'sajjad@gmail.com', password: 'admin123', role: 'admin' },
      { id: 3, firstName: 'rahee', lastName: 'kk', email: 'raheela@gmail.com', password: 'rahi123', role: 'admin' },
      { id: 3, firstName: 'salma', lastName: 'xyz', email: 'salma@gmail.com', password: 'salma123', role: 'admin' },
    ]
    if(sessionStorage.getItem('users') == null){
      sessionStorage.setItem('users', JSON.stringify(userList));
    }
  }

  get f() {
    return this.loginFrom.controls
  }

  checkLogin() {
    this.isSubmitted = true;
    if (!this.loginFrom.valid) return
    const formData = this.loginFrom.value;
    const alluser = JSON.parse(sessionStorage.getItem('users') || '{}');
    const checkUser = alluser.some((el:any)=>{
      return el.email == formData.email && el.password == formData.password;
    })
    if(checkUser){
      const activeUser:any = alluser.find((el:any)=> el.email == formData.email);
      activeUser.token = "xyz.xyz.xyz";
      delete activeUser.password;
      sessionStorage.setItem('activeUser',JSON.stringify(activeUser));
      alert('login success');
      this.router.navigate(['/main/dashboard']);
    }else{
      alert('invalid email or password');
    }
    // let payload = this.signUpFrom.value;
    // this.http.post('https://reqres.in/api/users', payload, {}).subscribe((res: any) => {
    //   console.log(res);
    //   console.log('user created')
    // })
  }
}
