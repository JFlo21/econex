import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businessregister',
  templateUrl: './businessregister.component.html',
  styleUrls: ['./businessregister.component.css']
})
export class BusinessregisterComponent implements OnInit {

  public businessSignUpForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.businessSignUpForm = this.formBuilder.group({
      BusinessName:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
    })
    
  }
  businessSignUp(){
      this.http.post<any>('http://localhost:4000/users/registerseller',this.businessSignUpForm.value).subscribe({
        
      next: (v) => console.log(v)
      /*next: (v) => alert("Signup Successful"),
        error: (e) => alert("Something went wrong"),
        complete: () => this.router.navigate(['businesslogin'])*/
      
      
    })

     alert("Signup Successful");
    this.router.navigate(['businesslogin']);
      err=>{ 
        alert("Something went wrong")
      }


      /*subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      
      
    })
*/
  
  }
}