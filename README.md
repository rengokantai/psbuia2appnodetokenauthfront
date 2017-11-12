```
npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@l
atest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/router@latest --save
```



```
providers: [ApiService,AuthService,{provide: HTTP_INTERCEPTORS,multi:true,useClass:AuthInterceptorService}],
ng build --env=prod
```


```
git init
heroku git:remote -a 
git add .
git c -m ""
git push h m
h login
```

exist:***
```
h git:remote -a ps
```


```
app.listen(process.env.PORT || 3000)
```
package.json
```
"engines":{
  "node":"8.1.2"
}
```

replace 
```
localhost:3000
```
to
```
https://xxx.happ.com
```
without port