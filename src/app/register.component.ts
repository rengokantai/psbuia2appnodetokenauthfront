import { Component,OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  providers:[
    AuthService
  ],
  selector: 'register',
  templateUrl:'register.component.html'
})
export class RegisterComponent {
  constructor(private authService: AuthService){}
  registerData={
    email:'',
    pwd:''
  }
  post(){
    console.log(this.registerData)
    this.authService.registerUser(this.registerData);
  }
}
