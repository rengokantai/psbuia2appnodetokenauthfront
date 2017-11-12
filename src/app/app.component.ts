import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
  <button mat-button routerLink="/">YK</button>
  <button mat-button routerLink="/users">Users</button>
  <span style="flex: 1 1 auto"></span>
  <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
  <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
  <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  constructor(private authService:AuthService){}
}
