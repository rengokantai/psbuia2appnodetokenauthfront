import { Component,OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  providers:[
    ApiService
  ],
  selector: 'messages',
  template:`
  <div *ngFor="let message of apiService.messages">
  <mat-card>{{message.message}}</mat-card>
</div>
  `
})
export class MessagesComponent {
  title = 'app';
  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.apiService.getMessage();
  }
}
