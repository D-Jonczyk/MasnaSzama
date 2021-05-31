import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  faCalendarAlt,
  faCheckSquare, faClipboardList,
  faCoffee, faComments, faFingerprint, faHandMiddleFinger, faHeadset, faHistory,
  faInfo, faListAlt,
  faLocationArrow,
  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,
  faTruckLoading, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LINKS } from '../courier-panel.component';
import {DeliveryOrder} from './delivery-order';
import {DeliveryOrderService} from './delivery-order.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Order} from '../../Order/order';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['../courier-panel.component.css', './orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  faCoffee = faCoffee;
  closeResult = '';
  fas = 'fas';
  links = LINKS;
  courierId = 201;
  public orders: DeliveryOrder[];
  public completedOrder: Order;

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  constructor(public route: ActivatedRoute, public library: FaIconLibrary,
              private modalService: NgbModal, private deliveryOrdersService: DeliveryOrderService) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory);
  }

  ngOnInit(): void {
    this.getCourierOrders();
  }

  public getCourierOrders(): void {
    this.deliveryOrdersService.getDeliveryOrders(this.courierId).subscribe(
      (response: DeliveryOrder[]) => {
        this.orders = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public finishDeliveryOrder(order: DeliveryOrder): void {
    this.deliveryOrdersService.finishDeliveryOrder(order.orderId).subscribe(
      (response: DeliveryOrder) => {
        console.log(response);
        this.getCourierOrders();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openConfirmDelivery(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-confirm-delivery'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${OrderlistComponent.getDismissReason(reason)}`;
    });
  }

  openCallTheClient(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-call-client'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${OrderlistComponent.getDismissReason(reason)}`;
    });
  }

  openCallCoordinator(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-call-coordinator'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${OrderlistComponent.getDismissReason(reason)}`;
    });
  }

}
