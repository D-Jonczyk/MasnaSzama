import { Component, OnInit } from '@angular/core';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import { RestaurantSummaryService } from '../restaurant-summary-service/restaurant-summary.service';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-summary',
  templateUrl: './restaurant-summary.component.html',
  styleUrls: ['./restaurant-summary.component.css']
})
export class RestaurantSummaryComponent implements OnInit {

  restaurants$: Observable<RestaurantSummary[]>;

  constructor(private restaurantService: RestaurantSummaryService, private router: Router) {

    this.restaurants$ = restaurantService.getRestaurant();
  }

  ngOnInit(): void {}

  showMenu() : void {
    this.router.navigate(['/restaurant-menu']);
  }

}
