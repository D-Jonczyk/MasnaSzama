import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpErrorResponse} from '@angular/common/http';
import {CourierProfile} from "../courier-panel/profile/courier-profile";
import {AccountService} from "./account-service";


@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent implements OnInit {
  logoFacebook:string="assets/facebook-logo.png";

  loginForm = this.formBuilder.group({
    userName:'',password:''
  });



  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: NgbModal,
              private accountService: AccountService) { }

  ngOnInit(): void {

  }


  goToRegisterAcc(): void {
    this.router.navigateByUrl('/register-account');
  }


}
