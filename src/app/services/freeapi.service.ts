import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';

@Injectable()
export class FreeApiService {

    constructor(private httpClient: HttpClient){

    }
    getcomments(): Observable<any>{
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    }

    getWithParamcomments(): Observable<any>{
        let param1 = new HttpParams().set('postId', '1');
        return this.httpClient.get("https://jsonplaceholder.typicode.com/comments", {params: param1})
    }

    post(postApi: Posts): Observable<any>{
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", postApi)
    }

    put(postApi: Posts): Observable<any>{
        return this.httpClient.put("https://jsonplaceholder.typicode.com/posts/1", postApi)
    }

    patch(postApi: Posts): Observable<any>{
        return this.httpClient.patch("https://jsonplaceholder.typicode.com/posts/1", postApi)
    }

    delete(): Observable<any>{
        return this.httpClient.delete("https://jsonplaceholder.typicode.com/posts/1")
    }
}