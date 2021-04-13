import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourierPanelComponent} from '../courier-panel.component';
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
import {faCheckCircle, faClock} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['../courier-panel.component.css', './orderlist.component.css']
})
export class OrderlistComponent extends CourierPanelComponent implements OnInit {

  faCoffee = faCoffee;

  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];
  constructor(public route: ActivatedRoute, private library: FaIconLibrary) {
    super();
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle);
  }

  ngOnInit(): void {
  }

}
