import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from "./account";
import {Meal} from "../Restaurant/model/meal.model";
import {CourierProfile} from "../courier-panel/profile/courier-profile";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //http://localhost:8080/client/getLogin?userName=Pawel&password=jebaccie
  private loginUrl = 'http://localhost:8080/client/getLogin?userName=Pawel&password=jebaccie';
  userName: string;
  password: string;

  constructor(private http: HttpClient) {
  }


  getAccount(userName, password): Observable<Account> {
    const params = new HttpParams()
      .set('userName', userName)
      .set('password', password);
      return this.http.get<Account>(this.loginUrl); // {params} short form of {params:params}
  //  return this.http.get<Account>(this.loginUrl + userName + "&password=" + password); // {params} short form of {params:params}

  }


}

