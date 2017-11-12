import { Component,OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {ActivatedRoute} from '@angular/router'

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
  constructor(private apiService: ApiService,private route:ActivatedRoute){}
  ngOnInit(){
    var userID = this.route.snapshot.params.id
    this.apiService.getMessages(userID);
  }
}
