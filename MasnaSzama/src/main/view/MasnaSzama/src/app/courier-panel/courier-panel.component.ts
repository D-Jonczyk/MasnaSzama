import { Component, OnInit } from '@angular/core';
import {Courier} from "../Person/Employee/courier";
import {Order} from "../Order/order";
import {OrderService} from "../Order/order.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-courier-panel',
  templateUrl: './courier-panel.component.html',
  styleUrls: ['./courier-panel.component.css']
})
export class CourierPanelComponent implements OnInit {
  title = 'Panel kuriera';
  public couriers: Courier[];
  public orders: Order[];

  constructor(private orderService: OrderService) {
  }

  public getOrders(): void {
    this.orderService.getOrders().subscribe(
      (response: Order[]) => {
        this.orders = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getOrders();
  }

}
