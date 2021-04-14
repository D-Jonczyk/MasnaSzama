import { Client} from './customer';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService{
 private apiServerUrl = environment.apiBaseUrl + '/customer';

  constructor(private http: HttpClient) {}

}
