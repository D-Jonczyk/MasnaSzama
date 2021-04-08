import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe, WeekDay} from '@angular/common';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  active = 'schedule';
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];

  currentDate = new Date();
  iterationDate: Date = new Date();
  first = this.currentDate.getDate() - this.currentDate.getDay();
  last = this.first + 6;

  firstDayOfTheWeek = new Date(this.currentDate.setDate(this.first));
  lastDayOfTheWeek = new Date(this.currentDate.setDate(this.last));

  diff = 1;
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
