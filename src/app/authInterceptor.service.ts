import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  constructor(private injector:Injector){}
  intercept(req,next){
    console.log(req)
    var auth = this.injector.get(AuthService)
    var authRequest = req.clone({
      headers:req.headers.set('Authorization','token '+auth.token)
    })
    return next.handle(authRequest)
  }
}

// export class AuthInterceptorService implements HttpInterceptor{
//   constructor(private auth:AuthService){}
//   intercept(req,next){

//     var authRequest = req.clone({
//       headers:req.headers.set('Authorization','token '+this.auth.token)
//     })
//     return next.handle(authRequest)
//   }
// }