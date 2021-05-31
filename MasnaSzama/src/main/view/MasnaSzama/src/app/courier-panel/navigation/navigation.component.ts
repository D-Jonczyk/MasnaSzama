import {Component} from '@angular/core';
import {LINKS} from '../courier-panel.component';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeliveryOrderService} from '../orderlist/delivery-order.service';
import {
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
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../courier-panel.component.css', './navigation.component.css']
})
export class NavigationComponent {
  links = LINKS;

  constructor(public route: ActivatedRoute, public library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory);
  }
}
