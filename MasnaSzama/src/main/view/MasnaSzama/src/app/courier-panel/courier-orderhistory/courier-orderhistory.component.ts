import { Component, OnInit } from '@angular/core';
import {FinishedOrdersService} from './finished-orders.service';
import {FinishedOrders} from './finished-orders';
import {HttpErrorResponse} from '@angular/common/http';
import {LINKS} from '../courier-panel.component';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faCalendarAlt,
  faCheckSquare,
  faClipboardList, faComments, faHeadset, faHistory,
  faInfo, faListAlt,
  faLocationArrow,
  faMapMarkerAlt, faPhoneAlt, faQuestionCircle,
  faSquare,
  faTruckLoading, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-courier-orderhistory',
  templateUrl: './courier-orderhistory.component.html',
  styleUrls: ['../courier-panel.component.css', './courier-orderhistory.component.css']
})
export class CourierOrderhistoryComponent implements OnInit {
  courierId = 210;

  links = LINKS;

  public finishedOrders: FinishedOrders[];

  constructor(private finishedOrdersService: FinishedOrdersService, public library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory, faCheckCircle);
  }

  ngOnInit(): void {
    this.getFinishedOrders();
  }

  public getFinishedOrders(): void {
    this.finishedOrdersService.getFinishedOrders(this.courierId).subscribe(
      (response: FinishedOrders[]) => {
        this.finishedOrders = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
