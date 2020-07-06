import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  followers:number=256;
  following:number  = 400;
  postCount:number = 21;
  constructor() { }

  ngOnInit(): void {
  }

}
