import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getPosts(){
    const url="http://localhost:3000/posts"
    return this.http.get(url);
  }
}
