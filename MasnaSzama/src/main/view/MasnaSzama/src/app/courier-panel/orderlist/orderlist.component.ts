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

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['../courier-panel.component.css', './orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  isFinished = false;
  faCoffee = faCoffee;
  closeResult = '';
  fas = 'fas';
  links = LINKS;
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
              private modalService: NgbModal) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory);
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
