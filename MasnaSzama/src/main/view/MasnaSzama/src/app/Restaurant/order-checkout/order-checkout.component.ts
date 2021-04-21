import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Location} from "@angular/common";
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  orderForm = this.formBuilder.group(
    {
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required)
    }
  );

  totalCost: number;

  constructor(private formBuilder: FormBuilder,
              private library: FaIconLibrary,
              private restaurantMenu: RestaurantMenuService,
              private location: Location) {
    library.addIcons(faShoppingCart);
    this.totalCost = restaurantMenu.totalCost;
  }

  ngOnInit(): void {
  }

  backToPreviousPage(): void {
    this.location.back();
  }
}
