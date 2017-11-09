import { Component,OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  providers:[
    AuthService
  ],
  selector: 'login',
  template: `Login
  <mat-card>
  <mat-card-header>
  <mat-card-title>
    <h4>Login</h4>
  </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form>
  <mat-input-container>
    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type="email">
  </mat-input-container>
  <mat-input-container>
    <input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="password" type="password">
  </mat-input-container>
  <button (click)="post()" mat-raised-button color="primary">login</button>
  </form>
  </mat-card-content>
  </mat-card>
  `
})
export class LoginComponent {
  constructor(private authService: AuthService){}
  loginData={
    email:'',
    pwd:''
  }
  post(){
 
    this.authService.loginUser(this.loginData);
  }
}
