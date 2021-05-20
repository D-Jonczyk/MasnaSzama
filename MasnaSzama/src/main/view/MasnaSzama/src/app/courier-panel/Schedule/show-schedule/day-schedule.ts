import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export class DaySchedule {
  fullDate: Date;
  startTime: NgbTimeStruct;
  endTime: NgbTimeStruct;


  constructor(fullDate: Date, startTime: NgbTimeStruct, endTime: NgbTimeStruct) {
    this.fullDate = fullDate;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
