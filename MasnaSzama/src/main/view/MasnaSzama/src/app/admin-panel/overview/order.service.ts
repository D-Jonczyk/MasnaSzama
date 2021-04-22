import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { OrderModel } from './order.model';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<{message: string, data: OrderModel[]}>('http://localhost:3000/api/orders');
  }
}
