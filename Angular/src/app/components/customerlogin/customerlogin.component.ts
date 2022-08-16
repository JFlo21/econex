import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Username:['',Validators.required],
      Password:['',Validators.required],
    })
  }
  login(){
    this.http.post<any>("http://localhost:4000/users/login",this.loginForm.value)
    .subscribe(res=>{
      // const user = res.find((a:any)=> {
      //   return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password
      // });

      if(res.user.UserId){
        alert("Login Success");
        // this.loginForm.reset();
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['shop'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("User not found");
    })

  }

}
