import { Component, OnInit } from '@angular/core';
import {Courier} from '../Person/Employee/courier';
import {Order} from '../Order/order';
import {OrderService} from '../Order/order.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courier-panel',
  templateUrl: './courier-panel.component.html',
  styleUrls: ['./courier-panel.component.css']
})
export class CourierPanelComponent implements OnInit {
  title = 'Panel kuriera';
  public couriers: Courier[];
  public orders: Order[];
  active = 'top';
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];

  orders$: Observable<Order[]>;
  activeId: any;
  constructor(private orderService: OrderService, public route: ActivatedRoute) {
    this.orders$ = orderService.getOrder();
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
  }
}
