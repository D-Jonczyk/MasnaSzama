import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourierPanelComponent} from '../courier-panel.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../courier-panel.component.css', './profile.component.css']
})
export class ProfileComponent extends CourierPanelComponent implements OnInit {
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];

  constructor(public route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
  }

}
