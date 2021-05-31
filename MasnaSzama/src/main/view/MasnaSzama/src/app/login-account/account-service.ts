import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private loginUrl = 'http://localhost:8080/';
  userName: string;
  password: string;

  constructor(private http: HttpClient) {
  }

}

