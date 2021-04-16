import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPauseCircle, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {LINKS} from '../courier-panel.component';
import {
  faCalendarAlt,
  faComments,
  faHistory,
  faListAlt,
  faLocationArrow,
  faQuestionCircle,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../courier-panel.component.css', './profile.component.css']
})
export class ProfileComponent implements OnInit {
  isClicked = true;
  isWorking = false;
  links = LINKS;
  constructor(public route: ActivatedRoute, private library: FaIconLibrary) {
    library.addIcons(faPlayCircle, faPauseCircle,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }
  ngOnInit(): void {
  }
  toggleDisplay(): void {
    this.isClicked = !this.isClicked;
  }
  toggleShiftButton(): void {
    this.isWorking = !this.isWorking;
  }
}
