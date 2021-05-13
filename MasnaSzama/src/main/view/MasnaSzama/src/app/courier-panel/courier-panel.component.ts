import { Component, OnInit } from '@angular/core';
import {Courier} from '../Person/Employee/courier';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt, faComments,
  faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';


export const LINKS: object[] = [
  { title: 'Nawigacja', fragment: '/navigation', icon: 'location-arrow' },
  { title: 'Lista zamówień', fragment: '/orderlist', icon: 'list-alt'},
  { title: 'Czat', fragment: '/chat', icon: 'comments'},
  { title: 'Grafik', fragment: '/show-schedule', icon: 'calendar-alt'},
  { title: 'Mój profil', fragment: '/profile', icon: 'user-circle'},
  { title: 'Historia zamówień', fragment: '/courier-orderhistory', icon: 'history'},
  { title: 'Wsparcie kuriera', fragment: '/support', icon: 'question-circle'}
];

@Component({
  selector: 'app-courier-panel',
  templateUrl: './courier-panel.component.html',
  styleUrls: ['./courier-panel.component.css']
})
export class CourierPanelComponent implements OnInit {
  title = 'Panel kuriera';
  public courier: Courier[];
  links = LINKS;
  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlayCircle, faSearch,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }

  ngOnInit(): void {
  }
}



