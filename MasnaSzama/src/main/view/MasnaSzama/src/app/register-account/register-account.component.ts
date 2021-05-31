import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Person} from './person';
import {RegisterRequest} from './register-request';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  registerUrl = 'localhost:8080/register';
  registerRequest: RegisterRequest = new RegisterRequest();
  person: Person;
  isRegisterSuccessful: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: NgbModal,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.registerRequest.person = new Person();
  }
  openScrollableContent(longContent): void {
    this.modalService.open(longContent, { scrollable: true });
  }
  openRegisterInfo(registerInfo): void {
    this.modalService.open(registerInfo, { centered: true });
  }
  registerAcc(): void {
    this.http.post(
      this.registerUrl,
      this.registerRequest,
      {responseType: 'text'}).subscribe(response => {
      if (response) {
        this.isRegisterSuccessful = true;
      } else {
        this.isRegisterSuccessful = false;
      }
      console.log('isregistersuccessful:' + this.isRegisterSuccessful)
    });
  }
}
