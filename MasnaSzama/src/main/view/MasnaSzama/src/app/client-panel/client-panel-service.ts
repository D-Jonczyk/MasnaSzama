import {Injectable} from '@angular/core';
import {ClientPanel} from './client-panel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientPanelService {

  accLink:string;
  clientName:string;
  clientSurname:string;
  private clientPanelUrl = 'http://localhost:8080/client/find/';
  // private editProfileUrl = 'http://localhost:8080/client/update';
  constructor(private http: HttpClient) {
  }

  getClientProfile(userName): Observable<ClientPanel> {
    return this.http.get<ClientPanel>(this.clientPanelUrl + userName);
  }
  // editClientProfile(client: ClientProfile): Observable<ClientProfile> {
  //   console.log('personId: ', client.personId, 'phoneNumber: ',
  //     client.phoneNumber, 'firstName', client.firstName, 'lastName: ', client.lastName);
  //   return this.http.put<ClientProfile>(this.editProfileUrl, client);
  // }

}
