import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API ='http://localhost:3000/api/auth';
const httpOptions ={
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

  login (username:string , password:string):Observable<any>{
    return this.http.post(API + '/signin',{
      username,
      password
    },httpOptions)
  }

  register(username : string , firstname : string , lastname : string ,dateOfBirth: string , email : string , phoneNumber : string , password : string ):Observable<any>{
    return this.http.post(API + '/signup',{
      username,
      firstname,
      lastname,
      dateOfBirth,
      email,
      phoneNumber,
      password
    }, httpOptions)
  }
}
