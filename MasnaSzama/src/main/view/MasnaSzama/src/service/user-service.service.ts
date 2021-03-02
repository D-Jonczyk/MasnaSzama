import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import  {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User){
    this.http.post<User>(this.usersUrl, user);
  }


}
