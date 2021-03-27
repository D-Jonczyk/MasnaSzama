import { Order} from "./order";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Courier} from "../Person/Employee/courier";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiServerUrl + '/orders/get/all');
  }
}
