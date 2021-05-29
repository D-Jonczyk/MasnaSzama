import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DaySchedule} from './day-schedule';

@Injectable({
  providedIn: 'root'
})
export class CourierScheduleService {

  private getCourierScheduleUrl = 'http://localhost:8080/courier/getSchedule/';

  constructor(private http: HttpClient) {
  }

  getWeeklyCourierSchedule(courierId: number, weekNumber: number): Observable<DaySchedule[]> {
    return this.http.get<DaySchedule[]>(this.getCourierScheduleUrl + courierId + '/' + weekNumber);
  }

}
