import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../Person/customer';
import {Order} from '../Order/order';
import {OrderService} from '../Order/order.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css']
})
export class ClientPanelComponent implements OnInit {
  titel = 'Panel Klienta';
  public customers: Customer[];
  public orders: Order[];
  active ='top';
  links=[
   { title: 'Mój profil', fragment: '/client-profile'},
   { title: 'Historia zamowien', fragment: '/order-history'},
   { title: 'Twoje adresy', fragment: '/client-adress'},
   { title: 'Wyloguj', fragment: '/logout'},
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
