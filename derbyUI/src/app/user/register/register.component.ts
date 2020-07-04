import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();
  hide:boolean = false;
  userForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  }); 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoHome(){
      this.router.navigate(['/welcome']);
  }

  onSubmit(){

  }


}
