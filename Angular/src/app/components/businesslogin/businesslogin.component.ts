import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businesslogin',
  templateUrl: './businesslogin.component.html',
  styleUrls: ['./businesslogin.component.css']
})
export class BusinessloginComponent implements OnInit {

  public businessLoginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.businessLoginForm = this.formBuilder.group({
      BusinessName:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  businessLogin(){
    this.http.post<any>("http://localhost:4000/users/loginseller",this.businessLoginForm.value)
    .subscribe(res=>{
      /*const businessUser = res.find((a:any)=>{
        return a.BusinessName === this.businessLoginForm.value.BusinessName && a.Password === this.businessLoginForm.value.Password 
      });*/
      console.log(res);
      if(res.user.UserId){
        alert("Login Success");
        //this.businessLoginForm.reset();
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['inventory'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong!")
    })
/*
if(res.UserId){
        alert("Login Success");
        // this.loginForm.reset();
        this.router.navigate(['shop'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("User not found");
    })
*/
  }

}
