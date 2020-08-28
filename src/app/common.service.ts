import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  createUser(user){
    return this.http.post("http://localhost:3000/users",user)
  }

  getUser(){
    return this.http.get("http://localhost:3000/users")
  }

 
}
