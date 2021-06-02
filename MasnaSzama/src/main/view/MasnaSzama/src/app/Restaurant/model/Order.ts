import {Restaurant} from "./Restaurant";
import {Payment} from "./Payment";
import {Customer} from "./Customer";
import {OrderStatus} from "./OrderStatus";

export class Order {

  orderId: number;
  restaurantId: number;
  customerId: Customer;
  paymentId: Payment;
  orderStatus: number;
  orderedTime: string;
  orderPrice: number;
  desiredDeliveryTime: string;
  tip: number;


  constructor(orderId: number, restaurantId: number, customerId: Customer, paymentId: Payment, orderStatus: number, orderedTime: string, orderPrice: number, desiredDeliveryTime: string, tip: number) {
    this.orderId = orderId;
    this.restaurantId = restaurantId;
    this.customerId = customerId;
    this.paymentId = paymentId;
    this.orderStatus = orderStatus;
    this.orderedTime = orderedTime;
    this.orderPrice = orderPrice;
    this.desiredDeliveryTime = desiredDeliveryTime;
    this.tip = tip;
  }
}
