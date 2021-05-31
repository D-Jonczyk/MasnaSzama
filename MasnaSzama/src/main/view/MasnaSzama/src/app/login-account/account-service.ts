import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private loginUrl = 'http://localhost:8080/login';
  userName: string;
  userPassword: string;

  constructor(private http: HttpClient) {
  }

  getAccount(userName, userPassword): Observable<Account> {
    const params = new HttpParams()
      .set('userName', userName)
      .set('userPassword', userPassword);
    return this.http.get<Account>(this.loginUrl); // {params} short form of {params:params}
  }
}

