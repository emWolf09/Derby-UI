import { Component, OnInit } from '@angular/core';
import {User} from './../../model/User';
import {Login} from './Login';
import { Router } from '@angular/router';
import {UserLoginService} from './../../services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login:Login = new Login();
  user:User;
  valid:boolean;
  isLoggedIn:boolean;
  errorMessageFromBackend:string;

  constructor(private router:Router,private loginService:UserLoginService) {
    this.valid=true;
    this.isLoggedIn=false;
    this.errorMessageFromBackend=null;
  }

  ngOnInit(){

  }

  onSubmit(){
    this.valid = true;
    const name = this.login.userName;
    const password = this.login.password;
    this.errorMessageFromBackend="tried to backend";
    this.user = new User();
    this.loginService.login(name,password).subscribe(
      userFromBacked =>this.user=userFromBacked,
      error=>this.errorMessageFromBackend = <string>error
    );
    console.log(this.errorMessageFromBackend+" "+this.user.name);
    this.router.navigate(['/profile']);
  }
}
