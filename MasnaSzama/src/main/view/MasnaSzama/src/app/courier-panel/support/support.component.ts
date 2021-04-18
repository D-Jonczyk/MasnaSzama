import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt, faComments,
  faFingerprint,
  faHandMiddleFinger, faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '../courier-panel.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['../courier-panel.component.css', './support.component.css']
})
export class SupportComponent implements OnInit {
  links = LINKS;
  constructor(public route: ActivatedRoute, private library: FaIconLibrary) {
    library.addIcons(faPlayCircle, faHandMiddleFinger,
      faFingerprint, faSearch, faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory);
  }
  ngOnInit(): void {
  }

}
