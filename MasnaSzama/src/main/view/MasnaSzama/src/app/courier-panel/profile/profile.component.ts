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
import {CourierProfileService} from './courier-profile.service';
import {CourierProfile} from './courier-profile';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../courier-panel.component.css', './profile.component.css']
})
export class ProfileComponent implements OnInit {
  isClicked = true;
  isWorking = false;
  links = LINKS;
  public courierProfile = new CourierProfile();
  public editProfile = new CourierProfile();
  public courierId = 201;

  constructor(public route: ActivatedRoute, private library: FaIconLibrary,
              private courierProfileService: CourierProfileService) {
    library.addIcons(faPlayCircle, faPauseCircle,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }

  ngOnInit(): void {
    this.getCourierProfile();
  }

  public onEditProfile(courier: CourierProfile): void {
    this.courierProfileService.editCourierProfile(courier).subscribe(
      (response: CourierProfile) => {
        console.log(response);
        this.getCourierProfile();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.getCourierProfile();
      }
    );
  }

  getCourierProfile(): void {
    this.courierProfileService.getCourierProfile(this.courierId).subscribe(
      (response: CourierProfile) => {
        this.courierProfile = response;
        this.editProfile = this.courierProfile;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  toggleDisplay(): void {
    this.isClicked = !this.isClicked;
  }

  toggleShiftButton(): void {
    this.isWorking = !this.isWorking;
  }
}
