import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['../courier-panel.component.css', './support.component.css']
})
export class SupportComponent implements OnInit {
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
