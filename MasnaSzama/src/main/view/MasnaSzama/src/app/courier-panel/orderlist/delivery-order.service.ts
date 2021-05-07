import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeliveryOrder} from './delivery-order';
import {Observable} from 'rxjs';
import {Order} from '../../Order/order';

@Injectable({
  providedIn: 'root'
})
export class DeliveryOrderService {

  private deliveryOrdersUrl = 'http://localhost:8080/order/getDeliveryByCourierId?courierId=';
  private updateOrderUrl = 'http://localhost:8080/order/updateDeliveryOrderStatus?orderId=';

  constructor(private http: HttpClient) {
  }

  getDeliveryOrders(courierId): Observable<DeliveryOrder[]> {
    return this.http.get<DeliveryOrder[]>(this.deliveryOrdersUrl + courierId.toString());
  }

  finishDeliveryOrder(orderId: number): Observable<DeliveryOrder> {
    return this.http.get<DeliveryOrder>(this.updateOrderUrl + orderId.toString());
  }

}
