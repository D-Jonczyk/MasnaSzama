import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  registerForm = this.formBuilder.group({
    adr: ''
  });
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: NgbModal,) { }

  ngOnInit(): void {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openRegisterInfo(registerInfo) {
    this.modalService.open(registerInfo, { centered: true });
  }
  registerAcc(): void {
    this.router.navigateByUrl('/register-account');
  }
}
