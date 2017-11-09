import { Component,OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  providers:[
    AuthService
  ],
  selector: 'register',
  template: `Register
  <mat-card>
  <mat-card-header>
  <mat-card-title>
    <h4>Register new user</h4>
  </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form>
  <mat-input-container>
    <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email">
  </mat-input-container>
  <mat-input-container>
    <input [(ngModel)]="registerData.pwd" name="password" matInput placeholder="password" type="password">
  </mat-input-container>
  <button (click)="post()" mat-raised-button color="primary">register</button>
  </form>
  </mat-card-content>
  </mat-card>
  `
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
