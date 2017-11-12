import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  providers:[
    ApiService
  ],
  selector: 'post',
  template:`
New Post
  <mat-card>
  <mat-card-header>
  <mat-card-title>
    <h4>New post</h4>
  </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form>
  <mat-input-container>
    <input [(ngModel)]="postMsg" name="description" matInput placeholder="Post message">
  </mat-input-container>
  
  <button (click)="post()" mat-raised-button color="primary">post</button>
  </form>
  </mat-card-content>
  </mat-card>

  `
})
export class PostComponent {

  constructor(private apiService: ApiService){}
  postMsg=''
  post(){
    this.apiService.postMessage({msg:this.postMsg})
  }

}
