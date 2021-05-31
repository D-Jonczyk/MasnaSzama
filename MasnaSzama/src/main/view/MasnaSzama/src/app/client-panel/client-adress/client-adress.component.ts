import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown
} from '@fortawesome/free-solid-svg-icons';
import {Customer} from "../../Person/customer";
import { LINKS } from '../client-panel.component';
import {faGithub, faMedium} from "@fortawesome/free-brands-svg-icons";
import {ClientPanelService} from "../client-panel-service";


@Component({
  selector: 'app-client-adress',
  templateUrl: './client-adress.component.html',
  styleUrls: ['./client-adress.component.css']
})
export class ClientAdressComponent implements OnInit {

  titel = 'Adresy klienta';
  public customers: Customer[];
  public accountIcon = this.clientPanelService.accLink;
  public clientName = this.clientPanelService.clientName;
  public clientSurname = this.clientPanelService.clientSurname;
  links=LINKS;

  constructor(private library: FaIconLibrary,
              private clientPanelService:ClientPanelService ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown);
  }

  ngOnInit(): void {
  }

}
