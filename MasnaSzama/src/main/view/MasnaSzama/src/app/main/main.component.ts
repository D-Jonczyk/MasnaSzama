import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RestaurantSummary} from '../Restaurant/model/restaurant-summary.model';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {RestaurantSummaryService} from '../Restaurant/restaurant-summary-service/restaurant-summary.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  logoFacebook:string="assets/facebook-logo.png";

  addressForm = this.formBuilder.group({
    adr: ''
  });
  loginForm = this.formBuilder.group({
    adr: ''
  });
  registerForm = this.formBuilder.group({
    adr: ''
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private restaurantSummaryService: RestaurantSummaryService,
              private modalService: NgbModal)
  { }

  btnClick(): void {
    this.router.navigateByUrl('/courier-panel');
  }

  goToAdmin(): void {
    this.router.navigateByUrl('/admin-panel');
  }

  goToRestaurantOrders(): void {
    this.router.navigateByUrl('/restaurant-orders');
  }

  goToClient(): void {
    this.router.navigateByUrl('/client-panel');
  }
  loginAcc(): void {
    this.router.navigateByUrl('/client-panel');
  }
  registerAcc(): void {
    this.router.navigateByUrl('/client-panel');
  }

  openScrollableContent(statute) {
    this.modalService.open(statute, { scrollable: true });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.restaurantSummaryService.address = this.addressForm.get('adr').value.toString();
    this.router.navigateByUrl('/restaurant-summary');
  }

  openLogin(login) {
    this.modalService.open(login, { centered: true });
  }
  openRegister(login) {
    this.modalService.open(login, { centered: true });
  }


  get address(): string {
    return this.restaurantSummaryService.address;
  }
}
