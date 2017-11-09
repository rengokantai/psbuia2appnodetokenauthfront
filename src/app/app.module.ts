import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { ApiService} from './api.service';

const routes =[
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
