// import { Injectable } from '@angular/core';
// import {Order} from "../model/Order";
// import { catchError } from 'rxjs/operators';
// import {HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent} from '@angular/common/http';
// import { Observable, throwError, of} from 'rxjs';
// import {CourierProfile} from "../../courier-panel/profile/courier-profile";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class OrderCheckoutService {
//
//   private orderUrl = 'http://localhost:8080/order/createNewOrder';
//
//   constructor(
//     private http: HttpClient) {
//   }
//
//   addNewOrder(order: Order) {
//
//     console.log(order.orderId);
//     console.log(order.restaurant.restaurantId);
//     console.log(order.payment.paymentId);
//     console.log(order.orderStatus.statusId);
//     console.log(order.customer.personId);
//
//     return this.http.post<Order>(this.orderUrl, order,
//       {headers: {'Content-Type': 'application/json'}})
//       .pipe(
//         catchError(err => {
//           return throwError(err);
//         }));
//   }
// }

import { Injectable } from '@angular/core';
import {Order} from "../model/Order";
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import {CourierProfile} from "../../courier-panel/profile/courier-profile";

@Injectable({
  providedIn: 'root'
})
export class OrderCheckoutService {

  private orderUrl = 'http://localhost:8080/order/createNewOrder';

  constructor(
    private http: HttpClient) {
  }

  addNewOrder(order: Order){

    // console.log(order.orderId);
    // console.log(order.restaurant.restaurantId);
    // console.log(order.payment.paymentId);
    // console.log(order.orderStatus.statusId);
    // console.log(order.customer.personId);

    return this.http.put<Order>(this.orderUrl, order)
      .subscribe(r=>{});
  }
}

