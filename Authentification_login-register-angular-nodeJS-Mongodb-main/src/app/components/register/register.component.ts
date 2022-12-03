import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  
  form : any ={
    username : null,
    firstname: null,
    lastname: null,
    dateOfBirth: null,
    email : null,
    phoneNumber: null,
    password : null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor( private authService : AuthService ) { }

  ngOnInit(): void { 
  }
  
  onSubmit(): void {
    const { username ,firstname , lastname , dateOfBirth ,  email , phoneNumber , password } = this.form;

    this.authService.register(username ,firstname , lastname , dateOfBirth ,  email , phoneNumber , password).subscribe({
      next : data => {
        console.log(data);
        this.isSuccessful = true; 
        this.isSignUpFailed = false ; 
      },
      error : err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true ; 
      }
    });

  }

}
