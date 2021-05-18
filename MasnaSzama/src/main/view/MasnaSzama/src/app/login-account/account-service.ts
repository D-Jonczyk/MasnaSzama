import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Meal} from "../Restaurant/model/meal.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private loginUrl = 'http://localhost:8080/client/postLogin';
  userName: string;
  password: string;

  constructor(private http: HttpClient) {
  }



  getAccount(userName, password): Observable<Account> {
    const params = new HttpParams()
    .set('userName', userName)
    .set('password', password);
    this.http.get<any>(this.loginUrl,{params}) // {params} short form of {params:params}
    return this.http.get<Account>(this.loginUrl + userName.toString());
  }


}

