import { Component,OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  providers:[
    ApiService
  ],
  selector: 'users',
  template:`
  <div *ngFor="let user of apiService.users">
  <mat-card>{{user.email}}</mat-card>
</div>
  `
})
export class UsersComponent {
  title = 'app';
  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.apiService.getUsers();
  }
}
