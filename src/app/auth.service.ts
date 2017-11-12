import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
  messages = []
  path = 'http://localhost:3000/auth'

  TOKEN_KEY = 'token'
  constructor(private http:HttpClient){}

  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY)
  }

  registerUser(registerData){
    this.http.post(this.path+'/register',registerData).subscribe(
      res=>{
       // this.messages = res.json()
      }
    )
  }

  loginUser(loginData){
    this.http.post<any>(this.path+'/login',loginData).subscribe(
      res=>{
       // this.messages = res.json()
       console.log(res)
       localStorage.setItem(this.TOKEN_KEY,res.token)
      }
    )
  }

}