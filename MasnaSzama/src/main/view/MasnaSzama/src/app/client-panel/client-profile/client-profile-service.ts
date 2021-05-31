

import {Injectable} from '@angular/core';
import {ClientProfile} from './client-profile';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  private clientProfileUrl = 'http://localhost:8080/client/find/';
  private editProfileUrl = 'http://localhost:8080/client/update';
  private loadImageUrl = 'http://localhost:8080/client/loadImage';
  constructor(private http: HttpClient) {
  }

  getClientProfile(userName): Observable<ClientProfile> {
    return this.http.get<ClientProfile>(this.clientProfileUrl + userName);
  }

  editClientProfile(client: ClientProfile): Observable<ClientProfile> {
    return this.http.put<ClientProfile>(this.editProfileUrl, client);
   }

  loadImageProfile(client: ClientProfile): Observable<ClientProfile> {
    return this.http.put<ClientProfile>(this.loadImageUrl, client);
  }

}
