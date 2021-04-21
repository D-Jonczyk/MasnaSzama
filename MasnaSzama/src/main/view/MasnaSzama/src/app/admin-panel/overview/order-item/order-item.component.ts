import { Component, OnInit, Input } from '@angular/core';

import { OrderModel } from '../order.model'; // use for displaying data
import { OrderService} from '../order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() item: OrderModel; // Type of OrderModel, @Input allows parents to pass data down via instance variable "item"


  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

}
