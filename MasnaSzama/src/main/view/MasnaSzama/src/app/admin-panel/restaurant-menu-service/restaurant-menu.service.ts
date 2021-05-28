import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Meal} from '../model/meal.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantMenuService {
  private status;
  private errorMessage;
  private mealUrl = 'http://localhost:8080/restaurant/getmeals?id=';
  totalCost: number;
  private mealDeleteUrl = 'http://localhost:8080/meal/delete?id=';
  restId: string;
  private mealUpdateUrl = 'http://localhost:8080/meal/update?id=';
  updateId: string;

  constructor(
    private http: HttpClient) { }

  getMeals(id): Observable<Meal[]> {
   this.restId = id;
    return this.http.get<Meal[]>(this.mealUrl + id.toString());
  }

  deleteMeal(mealId):void{

  this.http.delete('http://localhost:8080/meal/delete?mealId=' + mealId.toString() + '&restaurantId=' + this.restId.toString())
  .subscribe({
              next: data => {
                  this.status = 'Delete successful';
              },
              error: error => {
                  this.errorMessage = error.message;
                  console.error('There was an error!', error);
              }
          });
          this.getMeals(this.restId);
  }
  }


