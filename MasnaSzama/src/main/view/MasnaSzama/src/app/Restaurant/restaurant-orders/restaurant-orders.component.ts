import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Meal} from "../model/meal.model";
import {ActivatedRoute} from "@angular/router";
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";
import {RestaurantOrders} from "../model/restaurant-orders.model";
import {RestaurantOrdersService} from "../restaurant-orders-service/restaurant-orders.service";

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.css']
})
export class RestaurantOrdersComponent implements OnInit {

  restaurantOrders$: Observable<RestaurantOrders[]>;

  constructor(private restaurantOrdersService: RestaurantOrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    //zmienić na id dla zalogowanej restauracji
    this.restaurantOrders$ = this.restaurantOrdersService.getOrders(42);
  }

}
