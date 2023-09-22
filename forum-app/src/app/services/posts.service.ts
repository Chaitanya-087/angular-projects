import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, take, throwError } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = 'http://localhost:8080/api/forum/posts'

  constructor(private http: HttpClient) { }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => { 
        if(err.status == 404) {
          return throwError(() => 'Post not found');
        } else {
          return throwError(() => 'An error occurred retrieving data');
        }
      })
      
    );
  }
  
}
