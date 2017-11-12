import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages.component';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { ApiService} from './api.service';
import { AuthService} from './auth.service';

const routes =[
  {path:'register',component:RegisterComponent},
  {path:'',component:PostComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'profile/:id',component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
