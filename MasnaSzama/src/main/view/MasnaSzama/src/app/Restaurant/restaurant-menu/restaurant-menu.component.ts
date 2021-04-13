import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";
import {Observable} from "rxjs";
import {Meal} from "../model/meal.model";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  meals$: Observable<Meal[]>;
  orderMeals: Meal[];
  sum: number;

  constructor(private route: ActivatedRoute,
              private restaurantMenuService: RestaurantMenuService) { }

  ngOnInit(): void {
    this.orderMeals = [];
    this.sum = 0;
    this.getMenu();
  }

  getMenu(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meals$ = this.restaurantMenuService.getMeals(id);
  }

  addToOrder(meal): void {
    this.orderMeals.push(meal);
    this.sum += this.orderMeals[this.orderMeals.length - 1].price;
  }

}
