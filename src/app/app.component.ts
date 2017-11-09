import { Component,OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  providers:[
    ApiService
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.apiService.getMessage();
  }
}
