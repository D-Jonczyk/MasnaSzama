import { Component, OnInit } from '@angular/core';
import {LINKS} from '../courier-panel.component';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  faCalendarAlt,
  faCheckSquare,
  faClipboardList, faComments, faHandMiddleFinger, faHeadset, faHistory,
  faInfo, faListAlt,
  faLocationArrow,
  faMapMarkerAlt, faPhoneAlt, faQuestionCircle,
  faSquare,
  faTruckLoading, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../courier-panel.component.css', './chat.component.css']
})
export class ChatComponent implements OnInit {
  links = LINKS;
  constructor(public route: ActivatedRoute, public library: FaIconLibrary,
              private modalService: NgbModal) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHandMiddleFinger, faHistory);
  }

  ngOnInit(): void {
  }

}
