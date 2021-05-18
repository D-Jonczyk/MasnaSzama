import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfile} from "./user-profile";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user: UserProfile;

  private loginUrl = 'http://localhost:8080/client/postLogin';
  address: string;

  constructor(
    private http: HttpClient) { }

  postLogin(email: string,password: string): Observable<UserProfile>{
    this.user.userName=email;
    this.user.password=password;
    return this.http.post<UserProfile>(this.loginUrl,this.user );
  }

}
