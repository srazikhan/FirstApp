import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  userList1: any;
  userList2: any;
  constructor(private http: HttpClient) {
    // const obs1 = of(1,4,5);//Observable
    // const obs2 = this.http.get('',{});//Observable

    //for async pipe
    //this.userList2 = this.http.get('https://reqres.in/api/users?page=2', {});
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    // let headersOptions = new HttpHeaders();
    // headersOptions = headersOptions.set('desingation','Software Engineer');
    // headersOptions = headersOptions.set('Token','Bearer asdasda.asddasd.asdasd');
    // console.log(headersOptions.has('desingation'))

    // let params = new HttpParams();
    // params=params.set('pageNo', 123); 

    // this.http.get('https://reqres.in/api/users?page=2', {headers:headersOptions,params :params}).subscribe((res: any) => {
    //   this.userList1 = res.data;
    // })

    this.http.get('https://reqres.in/api/users?page=2', {}).subscribe((res: any) => {
      this.userList1 = res.data;
    })
    
    this.http.get('https://jsonplaceholder.typicode.com/posts', {}).subscribe((res: any) => {
      console.log(res)
    });
  }

  createUser() {
    const formData: any = {
      name: "Sajjad Razi 1133",
      job: "Software Engineer"
    }

    //working with Form
    // let payload = this.myFrom.value;
    // this.http.post('https://reqres.in/api/users', payload, {}).subscribe((res: any) => {
    //   console.log(res);
    //   console.log('user created')
    // })

    this.http.post('https://reqres.in/api/users', formData, {}).subscribe((res: any) => {
      console.log(res);
      console.log('user created')
    })
  }

  editUser(userObj: any) {
    console.log(userObj)
    const formData: any = {
      name: userObj.first_name + userObj.last_name,
      job: "just testing"
    }
    this.http.put(`https://reqres.in/api/users/${userObj.id}`, formData, {}).subscribe((res: any) => {
      console.log(res);
      console.log('user updatted')
    })
  }

  deleteUser(userObj: any) {
    console.log(userObj)
    this.http.delete(`https://reqres.in/api/users/${userObj.id}`, {}).subscribe((res: any) => {
      console.log('user deleted')
    })
  }

}
