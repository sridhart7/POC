import { Component, OnInit } from '@angular/core';
import { comments } from './../classes/comments';
import { Posts } from './../classes/posts';
import { FreeApiService } from './../services/freeapi.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {
  commentList: comments[] | undefined;
  postData: Posts[] | undefined;
  objPost: Posts[] | undefined;
  objPut: Posts[] | undefined;
  objPatch: Posts[] | undefined
  message: any;

  constructor(private _freeApiService: FreeApiService) { }

  ngOnInit(): void {
    
    // Displayed GET Data
    this._freeApiService.getcomments().subscribe(
      data =>{
        this.commentList = data;
      }
    );

    // Displayed the GET data with params
    this._freeApiService.getWithParamcomments().subscribe(
      data =>{
        this.postData = data;
      }
    );

    //POST data returned
    var postApi = new Posts();
    postApi.body = 'Post data body';
    postApi.title = 'Post data title';
    postApi.userId = 5;


    this._freeApiService.post(postApi).subscribe( data => {
      this.objPost = data;
    });


    // PUT Data returned
    var postApi = new Posts();
    postApi.body = 'Put Data body';
    postApi.title = 'Put Data title';
    postApi.userId = 5;
    
    this._freeApiService.put(postApi).subscribe( data => {
      this.objPut = data;
    });


      // PATCH Data returned
      var postApi = new Posts();
      postApi.body = 'Patched the body';
  
      
      this._freeApiService.patch(postApi).subscribe( data => {
        this.objPatch = data;
      });


      // DELETE API  
      this._freeApiService.delete().subscribe( data => {
        this.message = "Deleted message successfully";
      });
  }

}
