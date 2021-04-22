import { Component, OnInit } from '@angular/core';

import {OrderService} from './order.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  orders = [{}];




  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.orderService
      .getOrders()
      .subscribe((response) => {
        console.log(response.message);
        this.orders = response.data;
        console.log(this.orders);


      });
  }
}
