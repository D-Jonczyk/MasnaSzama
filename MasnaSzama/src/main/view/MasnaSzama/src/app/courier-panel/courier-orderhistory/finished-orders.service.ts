import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FinishedOrders} from './finished-orders';

@Injectable( {
  providedIn: 'root'
})
export class FinishedOrdersService {

  private finishedOrdersUrl = 'http://localhost:8080/courier/getDeliveryHistory/';

  constructor(private http: HttpClient) {

  }

  getFinishedOrders(courierId): Observable<FinishedOrders[]> {
    return this.http.get<FinishedOrders[]>(this.finishedOrdersUrl + courierId);
  }
}
