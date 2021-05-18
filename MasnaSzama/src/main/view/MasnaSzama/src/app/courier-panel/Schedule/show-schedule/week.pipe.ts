import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'week' })
export class WeekPipe implements PipeTransform {
  transform(value: Date): number {
    return this.getWeekNumber(value);
  }

  // source: http://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
  private getWeekNumber(d: Date): number {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return weekNo;
  }
}
