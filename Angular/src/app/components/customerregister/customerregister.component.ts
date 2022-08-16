import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Username:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
    })
    
  }
  signUp(){
    this.http.post<any>("http://localhost:4000/users/signup",this.signupForm.value).subscribe({
     
      //next: (v) => alert("Signup Successful"),
      next: (v) => console.log(v),
     /* error: (e) => alert("Something went wrong"),
      complete: () => this.router.navigate(['login'])*/
      
    })
  
  alert("Signup Successful");
  this.router.navigate(['login']);
  err=>{
    alert("Something went wrong")
  }
}

}