import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import {DerbyUIConstants} from './../Constants/DerbyUIConstants';

@Injectable({
  providedIn: 'root'
})
export class UploadPostService {

  newPostUrl:string;
  retry_count:number = DerbyUIConstants.login_retry_count;

  constructor(private http:HttpClient) { }

  uploadNewPost(selectedFile: File):Observable<Number>{


    let observable:any  = new Observable<Number>((observer)=>{
      observer.next(7001);
      observer.complete();
    });

    return observable;
  
  }


  // //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    // const uploadImageData = new FormData();
    // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    // //Make a call to the Spring Boot Application to save the image
    // this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = 'Image uploaded successfully';
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );

}
