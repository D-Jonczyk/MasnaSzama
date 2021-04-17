import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";
import {Observable} from "rxjs";
import {Meal} from "../model/meal.model";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faPlusSquare, faShoppingCart, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

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
              private restaurantMenuService: RestaurantMenuService,
              public library: FaIconLibrary) {
    library.addIcons(faPlusSquare, faTrashAlt, faShoppingCart);
  }

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

  deleteFromOrder(id): void {
    let removeIndex = this.orderMeals.findIndex(meal => meal.id === id);
    this.sum = this.sum - this.orderMeals[removeIndex].price;
    this.orderMeals.splice(removeIndex, 1);
  }
}
