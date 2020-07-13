import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UploadPostService} from './../../services/upload-post.service';
import { DerbyUIConstants } from 'src/app/Constants/DerbyUIConstants';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  message: string = null;
  imageId: Number= null;
  selectedFile: File;
  imagePresent:boolean=false;
  imageSrc:string| ArrayBuffer;
  constructor(private router:Router,private uploadPostService:UploadPostService) { }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.imagePresent = true;
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = e.target.result;
    reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    console.log(this.selectedFile);
    if(this.selectedFile==undefined){
      this.message="please select image first !";
    }else{
      this.uploadPostService.uploadNewPost(this.selectedFile).subscribe(
        id =>this.imageId=id,
        error=>this.message = <string>error
      );
  
      if(this.imageId!=null && this.message==null){
        console.log(this.imageId);
        this.message = DerbyUIConstants.postSuccessMessage+this.imageId;
        //redirect to view post page
      }
    }

  }
}
