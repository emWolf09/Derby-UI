import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './../model/User';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import {DerbyUIConstants} from './../Constants/DerbyUIConstants';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  user :User;
  loginUrl:string = DerbyUIConstants.login_url;
  getUserByIdUrl:string = environment.getUserByIdUrl;
  retry_count:number = DerbyUIConstants.login_retry_count;
  private header:HttpHeaders = environment.header_zuul;
  
  constructor(private http:HttpClient) { }
  
  login(username :string,password:string ):Observable<User>{
    let u:User = new User();
    u.name = 'Mahesh';
    u.username='mahesh';
    u.id = 123;
    let observable:any  = new Observable<User>((observer)=>{
      observer.next(u);
      observer.complete();
    });
   
    return observable;
    // return this.http.get<User>(this.loginUrl).pipe(retry(this.retry_count));
  }

  getUserById(id:number):Observable<User>{
    id = 1002;
    return this.http.get<User>(this.getUserByIdUrl+id.toString(),{headers:this.header}).pipe(retry(this.retry_count));
  }

}
