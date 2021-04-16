import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  faCheckSquare, faClipboardList,
  faCoffee, faHeadset,
  faInfo,
  faLocationArrow,
  faMapMarkerAlt, faPhoneAlt,
  faSquare,
  faTruckLoading
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {ShowScheduleComponent} from '../Schedule/show-schedule/show-schedule.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['../courier-panel.component.css', './orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  isFinished = false;
  faCoffee = faCoffee;
  closeResult = '';
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];
  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  constructor(public route: ActivatedRoute, public library: FaIconLibrary, private modalService: NgbModal) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle);
  }

  ngOnInit(): void {
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
  toggleDisplay(): void {
    this.isFinished = true;
  }
}
