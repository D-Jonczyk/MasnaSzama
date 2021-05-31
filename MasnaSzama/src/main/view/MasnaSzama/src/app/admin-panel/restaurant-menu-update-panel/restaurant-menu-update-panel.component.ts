import { Component, OnInit } from '@angular/core';
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";
import {Observable} from "rxjs";
import {Meal} from "../model/meal.model";
import {ActivatedRoute} from "@angular/router";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faPlusSquare, faShoppingCart, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-restaurant-menu-update-panel',
  templateUrl: './restaurant-menu-update-panel.component.html',
  styleUrls: ['./restaurant-menu-update-panel.component.css']
})
export class RestaurantMenuUpdatePanelComponent implements OnInit {

  meals$: Observable<Meal[]>;
  orderMeals: Meal[];
  total: number;

  constructor(private route: ActivatedRoute,
              private restaurantMenuService: RestaurantMenuService,
              public library: FaIconLibrary) {
    library.addIcons(faPlusSquare, faTrashAlt, faShoppingCart);
  }

  ngOnInit(): void {
    this.orderMeals = [];
    this.total = 0;
    this.getMenu();
  }

  getMenu(): void {
    this.meals$ = this.restaurantMenuService.getMeals(42);
  }

  deleteFromOrder(mealId): void {
    console.log(mealId);
    this.restaurantMenuService.deleteMeal(mealId);

  }
updateMeal(meal): void {
    console.log(meal.id);
    console.log(meal.mealName);
    console.log(meal.meal);
    this.restaurantMenuService.updateMeal(meal);

  }
}
