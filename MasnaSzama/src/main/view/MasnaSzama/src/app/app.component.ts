import {Component, OnInit} from '@angular/core';
import {Courier} from "./Person/Employee/courier";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CourierService} from "./Person/Employee/courier.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MasnaSzama';
  public couriers: Courier[];

  constructor(private courierService: CourierService) {
  }

  public getCouriers(): void {
    this.courierService.getCouriers().subscribe(
      (response: Courier[]) => {
        this.couriers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  ngOnInit(): void {
    this.getCouriers();
  }

}
