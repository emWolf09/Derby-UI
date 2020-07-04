import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './../model/User';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import {DerbyUIConstants} from './../Constants/DerbyUIConstants';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  user :User;
  loginUrl:string = DerbyUIConstants.login_url;
  retry_count:number = DerbyUIConstants.login_retry_count;
  
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

}
