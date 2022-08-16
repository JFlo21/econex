import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    this.http.get<any>("http://localhost:4000/users/logout").subscribe(res=>{
   localStorage.removeItem('token')
   localStorage.removeItem('user');
   //localStorage.setItem('user', JSON.stringify(res.user));
   this.router.navigate(['/shop'])
  })
  }
 /*

 signUp(){
    this.http.post<any>("http://localhost:4000/users/signup",this.signupForm.value).subscribe({

 */
  
}
