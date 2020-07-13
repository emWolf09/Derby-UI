import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-feed',
  templateUrl: './top-feed.component.html',
  styleUrls: ['./top-feed.component.css']
})
export class TopFeedComponent implements OnInit {

  breakpoint:number = 1;
  likeCount:number=400;
  commentCount:number=34;
  allPosts:number[] = [1,2,3,4,5,6];
  imgUrl:any="https://material.angular.io/assets/img/examples/shiba2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  
  onResize(event) {
    this.breakpoint = 1;
  }

}
