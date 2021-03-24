import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { RestaurantSummary } from "../model/restaurant-summary.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantSummaryService {

  private restaurantSummaryUrl = "restaurant/getbycity?city=krakow";
  constructor(private http: HttpClient) { }

  getRestaurant(): Observable<RestaurantSummary[]> {

    return this.http.get<RestaurantSummary[]>(this.restaurantSummaryUrl);
  }
}
