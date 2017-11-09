import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
  YK
  <span style="flex: 1 1 auto"></span>
  <button mat-button>Register</button>
  </mat-toolbar>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
}
