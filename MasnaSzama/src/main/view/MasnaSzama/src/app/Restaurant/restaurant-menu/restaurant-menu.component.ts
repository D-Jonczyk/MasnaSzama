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

  constructor(private route: ActivatedRoute,
              private restaurantMenuService: RestaurantMenuService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meals$ = this.restaurantMenuService.getMeals(id);
  }

}
