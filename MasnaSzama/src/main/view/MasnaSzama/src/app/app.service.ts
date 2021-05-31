import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;
  private loginUrl =
    'http://localhost:8080/login';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback): void {

    const headers = new HttpHeaders(credentials ? {
      Authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.post(this.loginUrl,
      {headers}, {responseType: 'text'}).subscribe(response => {
      if (response) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

}
