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
      Username:['',Validators.required],
      BusinessName:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  businessLogin(){
    this.http.get<any>("http://localhost:3000/businesssignup")
    .subscribe(res=>{
      const businessUser = res.find((a:any)=>{
        return a.Username === this.businessLoginForm.value.Username && a.BusinessName === this.businessLoginForm.value.BusinessName && a.Password === this.businessLoginForm.value.Password 
      });
      if(businessUser){
        alert("Login Success");
        this.businessLoginForm.reset();
        this.router.navigate(['shop'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong!!")
    })

  }

}
