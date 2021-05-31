import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import { LINKS } from '../client-panel.component';

@Component({
  selector: 'app-favorite-restaurant',
  templateUrl: './favorite-restaurant.component.html',
  styleUrls: ['./favorite-restaurant.component.css']
})
export class FavoriteRestaurantComponent implements OnInit {

  titel = 'Ulubione restauracje';
  faCoffee = faCoffee;
  fas = 'fas';
  links=LINKS;
  accountIcon:string="assets/image/account-icon.png";

  constructor(public route: ActivatedRoute, public library: FaIconLibrary,
  ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown);
  }

  ngOnInit(): void {
  }

}
