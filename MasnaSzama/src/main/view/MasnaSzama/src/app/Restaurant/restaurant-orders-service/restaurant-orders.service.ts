import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestaurantOrders} from "../model/restaurant-orders.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrdersService {

  private restaurantOrdersUrl = 'http://localhost:8080/order/getbyRestaurantId?restaurantId=';

  constructor(
    private http: HttpClient) { }

  getOrders(id): Observable<RestaurantOrders[]> {

    return this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + id.toString());
  }
}
