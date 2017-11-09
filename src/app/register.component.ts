import { Component,OnInit } from '@angular/core';

@Component({
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
    <input matInput placeholder="email" type="email">
  </mat-input-container>
  <mat-input-container>
    <input matInput placeholder="password" type="password">
  </mat-input-container>
  <button mat-raised-button color="primary">register</button>
  </form>
  </mat-card-content>
  </mat-card>
  `
})
export class RegisterComponent {
  
}
