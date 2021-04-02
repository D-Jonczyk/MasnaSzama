import { Component, OnInit } from '@angular/core';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import { RestaurantSummaryService } from "../service/restaurant-summary.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-restaurant-summary',
  templateUrl: './restaurant-summary.component.html',
  styleUrls: ['./restaurant-summary.component.css']
})
export class RestaurantSummaryComponent implements OnInit {

  restaurants$: Observable<RestaurantSummary[]>;

  constructor(private restaurantService: RestaurantSummaryService) {

    this.restaurants$ = restaurantService.getRestaurant();
  }

  ngOnInit(): void {}

}
