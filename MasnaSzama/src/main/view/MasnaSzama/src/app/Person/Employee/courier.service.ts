import { Courier} from './courier';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourierService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCouriers(): Observable<Courier[]> {
    return this.http.get<Courier[]>(this.apiServerUrl + '/courier/get/all');
  }

  public addCourier(courier: Courier): Observable<Courier> {
    return this.http.post<Courier>(this.apiServerUrl + '/courier/add', courier);
  }

  public updateCourier(courier: Courier): Observable<Courier> {
    return this.http.put<Courier>(this.apiServerUrl + '/courier/update', courier);
  }

  public deleteCourier(courierId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + '/courier/delete/${courierId}');
  }
}
