import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown
} from '@fortawesome/free-solid-svg-icons';

import {Customer} from '../Person/customer';
import {faGithub, faMedium} from "@fortawesome/free-brands-svg-icons";

import {HttpErrorResponse} from "@angular/common/http";
import {ClientPanel} from "./client-panel";
import {ClientPanelService} from "./client-panel-service";
import {ClientProfileService} from "./client-profile/client-profile-service";
import * as globs from 'globals';


export const LINKS: object[] = [
  { title: 'Moj profil', fragment: '/client-profile', icon: 'user-circle' },
  { title: 'Lista Adresow', fragment: '/client-adress', icon: 'list-alt'},
  { title: 'Historia zamowien', fragment: '/order-history', icon: 'history'},
  { title: 'Ulubione', fragment: '/favorite-restaurant', icon: 'crown'},
  { title: 'Wyloguj', fragment: '/logout', icon: 'sign-out-alt'},
];

export const accLink:string ="assets/image/account-icon.png";

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css'],

})

export class ClientPanelComponent implements OnInit {
  titel = 'Panel Klienta';
  public customers: Customer[];
  public clientPanel = new ClientPanel();
  public editPanel = new ClientPanel();
  public clientId = 301;
  public accountIcon = null;

  links=LINKS;

  constructor(private library: FaIconLibrary,
              private clientPanelService: ClientPanelService,

              ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown);
  }

  ngOnInit(): void {
    this.getClientProfile();
  }

  getClientProfile(): void {
    this.clientPanelService.getClientProfile(this.clientId).subscribe(
      (response: ClientPanel) => {
        this.clientPanel = response;
        this.accountIcon = this.clientPanel.imgUrl;
        this.clientPanelService.accLink=this.clientPanel.imgUrl;
        this.clientPanelService.clientName=this.clientPanel.firstName;
        this.clientPanelService.clientSurname=this.clientPanel.lastName;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
