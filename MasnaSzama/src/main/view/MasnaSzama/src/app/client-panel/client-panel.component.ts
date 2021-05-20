import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt, faComments, faCrown,
  faFingerprint,
  faHandMiddleFinger, faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch, faSignOutAlt,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

import {Customer} from '../Person/customer';


export const LINKS: object[] = [
  { title: 'Moj profil', fragment: '/client-profile', icon: 'user-circle' },
  { title: 'Lista Adresow', fragment: '/client-adress', icon: 'list-alt'},
  { title: 'Historia zamowien', fragment: '/order-history', icon: 'history'},
  { title: 'Ulubione', fragment: '/favorite-restaurant', icon: 'crown'},
  { title: 'Wyloguj', fragment: '/logout', icon: 'sign-out-alt'},

];


@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css']
})
export class ClientPanelComponent implements OnInit {
  titel = 'Panel Klienta';
  public customers: Customer[];
  accountIcon:string="assets/image/account-icon.png";

  links=LINKS;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlayCircle, faSearch,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory, faSignOutAlt, faCrown);
  }

  ngOnInit(): void {
  }

}
