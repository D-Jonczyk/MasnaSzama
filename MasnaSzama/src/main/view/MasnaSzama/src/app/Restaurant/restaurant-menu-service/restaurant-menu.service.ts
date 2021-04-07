import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestaurantSummary} from "../model/restaurant-summary.model";
import {Meal} from "../model/meal.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantMenuService {

  private mealUrl = 'http://localhost:8080/restaurant/getmeals?id=';

  constructor(
    private http: HttpClient) { }

  getMeals(id): Observable<Meal[]> {

    return this.http.get<Meal[]>(this.mealUrl + id.toString());
  }
}
