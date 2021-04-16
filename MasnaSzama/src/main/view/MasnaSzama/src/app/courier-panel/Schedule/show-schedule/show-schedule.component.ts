import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {ModalDismissReasons, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {
  faCalendarAlt, faComments,
  faFingerprint,
  faHandMiddleFinger, faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '../../courier-panel.component';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['../../courier-panel.component.css', './show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  constructor(public route: ActivatedRoute, private library: FaIconLibrary, private modalService: NgbModal) {
    library.addIcons(faPlayCircle, faHandMiddleFinger,
      faFingerprint, faSearch, faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }
  closeResult = '';
  links = LINKS;
  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  endTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

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
  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${ShowScheduleComponent.getDismissReason(reason)}`;
    });
  }
}
