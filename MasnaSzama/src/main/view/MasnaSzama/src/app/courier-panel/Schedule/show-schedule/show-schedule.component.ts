import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {ModalDismissReasons, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {
  faCalendarAlt, faChevronCircleLeft, faChevronCircleRight, faComments,
  faFingerprint,
  faHandMiddleFinger, faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '../../courier-panel.component';
import {DaySchedule} from './day-schedule';
import {CourierScheduleService} from './courier-schedule.service';
import {HttpErrorResponse} from '@angular/common/http';
import {WeekPipe} from './week.pipe';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['../../courier-panel.component.css', './show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  courierId = 294;
  closeResult = '';
  links = LINKS;
  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  endTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  public weekNumber: number;

  firstDayOfTheWeek: Date = new Date();
  public currentWeekDays: Date[] = new Array(7).fill(new Date());

  currentDate = new Date();
  first = this.currentDate.getDate() - this.currentDate.getDay();

  diff = 1;
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6];

  weeklyCourierSchedule: DaySchedule[];

  constructor(public route: ActivatedRoute, private library: FaIconLibrary, private modalService: NgbModal,
              private courierScheduleService: CourierScheduleService) {
    library.addIcons(faPlayCircle, faHandMiddleFinger,
      faFingerprint, faSearch, faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory, faChevronCircleLeft, faChevronCircleRight);
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public scrollWeekSchedule(direction: number): void {
    this.weekNumber += direction;
    this.getWeeklyCourierSchedule(this.courierId, this.weekNumber);
  }

  public getWeekNumber(d: Date, delta: number): number {
    return WeekPipe.getWeekNumber(d) + delta;
  }

  private setCurrentWeekDays(): void {
    for (const i of this.numbers) {
      this.firstDayOfTheWeek.setDate(this.first + i);
      this.currentWeekDays[i] = JSON.parse(JSON.stringify(this.firstDayOfTheWeek));
      console.log(i);
    }
  }

  public getWeeklyCourierSchedule(courierId: number, weekNumber: number): void {
    this.courierScheduleService.getWeeklyCourierSchedule(courierId, weekNumber).subscribe(
      (response: DaySchedule[]) => {
        this.weeklyCourierSchedule = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getWeeklyCourierSchedule(this.courierId, this.getWeekNumber(new Date(), 0));
    this.setCurrentWeekDays();
    this.weekNumber = WeekPipe.getWeekNumber(new Date());
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${ShowScheduleComponent.getDismissReason(reason)}`;
    });
  }
}
