import {Injectable} from '@angular/core';
import {CourierProfile} from './courier-profile';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourierProfileService {

  private courierProfileUrl = 'http://localhost:8080/courier/find/';
  private editProfileUrl = 'http://localhost:8080/courier/update';

  constructor(private http: HttpClient) {
  }

  getCourierProfile(courierId): Observable<CourierProfile> {
    return this.http.get<CourierProfile>(this.courierProfileUrl + courierId);
  }

  editCourierProfile(courier: CourierProfile): Observable<CourierProfile> {
    console.log('personId: ', courier.personId, 'phoneNumber: ',
      courier.phoneNumber, 'firstName', courier.firstName, 'lastName: ', courier.lastName);
    return this.http.put<CourierProfile>(this.editProfileUrl, courier);
  }
}

