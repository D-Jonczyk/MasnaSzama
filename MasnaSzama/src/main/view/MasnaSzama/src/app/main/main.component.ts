import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RestaurantSummary} from '../Restaurant/model/restaurant-summary.model';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {RestaurantSummaryService} from '../Restaurant/restaurant-summary-service/restaurant-summary.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  addressForm = this.formBuilder.group({
    adr: ''
  });

  name = 'Damian';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private restaurantSummaryService: RestaurantSummaryService)
  { }

  btnClick(): void {
    this.router.navigateByUrl('/courier-panel');
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.addressForm.get('adr').value);
    this.restaurantSummaryService.address = this.addressForm.get('adr').value.toString();
    this.router.navigate(['/restaurant-summary']);
  }

  get address(): string {
    return this.restaurantSummaryService.address;
  }
}
