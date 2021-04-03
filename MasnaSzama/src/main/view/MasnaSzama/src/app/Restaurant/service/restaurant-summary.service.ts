import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantSummaryService {

  private restaurantSummaryUrl = 'http://localhost:8080/restaurant/getbycity?city=';
  address: string;

  constructor(
    private http: HttpClient) { }

  getRestaurant(): Observable<RestaurantSummary[]> {

    return this.http.get<RestaurantSummary[]>
    (this.restaurantSummaryUrl + this.address.toString());
  }

  /*setAddress(adr): void { // nie określa się typu ? wtf
    this.address = adr;
  }*/
}
