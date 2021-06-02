import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Location} from "@angular/common";
import {RestaurantMenuService} from "../restaurant-menu-service/restaurant-menu.service";
import {OrderCheckoutService} from "../order-checkout-service/order-checkout.service";
import {Order} from "../model/Order";
import {Restaurant} from "../model/Restaurant";
import {Customer} from "../model/Customer";
import {Payment} from "../model/Payment";
import {OrderStatus} from "../model/OrderStatus";

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

  private order: Order;


  constructor(private formBuilder: FormBuilder,
              private library: FaIconLibrary,
              private restaurantMenu: RestaurantMenuService,
              private location: Location,
              private  orderCheckoutService: OrderCheckoutService) {
    library.addIcons(faShoppingCart);
    this.totalCost = restaurantMenu.totalCost;

  }

  ngOnInit(): void {

  }

  backToPreviousPage(): void {
    this.location.back();
  }

  addNewOrder() : void
  {
    this.order = new Order(1352, 300, new Customer(400),
      new Payment(100),1, "2020-01-01 12:12:12", 99,
      "2020-01-01 13:12:12", 2);

    this.orderCheckoutService.addNewOrder(this.order);
  }

}
