import { Component, OnInit } from '@angular/core';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import { RestaurantSummaryService } from '../restaurant-summary-service/restaurant-summary.service';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faBicycle, faClock, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";


@Component({
  selector: 'app-restaurant-summary',
  templateUrl: './restaurant-summary.component.html',
  styleUrls: ['./restaurant-summary.component.css']
})
export class RestaurantSummaryComponent implements OnInit {

  restaurants$: Observable<RestaurantSummary[]>;

  constructor(private restaurantService: RestaurantSummaryService,
              private restaurantMenuService: RestaurantMenuService,
              private router: Router,
              private location: Location,
              public library: FaIconLibrary) {

    this.restaurants$ = restaurantService.getRestaurant();
    this.library.addIcons(faShoppingBag, faBicycle, faClock);
  }

  ngOnInit(): void {}

  backToPreviousPage(): void {
    this.location.back();
  }

  gotoRestaurantMenu(id, minOrderCost): void {
    this.restaurantMenuService.minOrderCost = minOrderCost;
      this.router.navigateByUrl('/restaurant-menu/'+id);
  }
}

