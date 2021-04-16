import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPauseCircle, faPlayCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../courier-panel.component.css', './profile.component.css']
})
export class ProfileComponent implements OnInit {
  isClicked = true;
  isWorking = false;
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];

  constructor(public route: ActivatedRoute, private library: FaIconLibrary) {
    library.addIcons(faPlayCircle, faPauseCircle);
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
