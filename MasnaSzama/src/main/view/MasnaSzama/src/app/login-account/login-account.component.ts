import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AccountService} from './account-service';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent implements OnInit {
  logoFacebook = 'assets/image/facebook-logo.png';

  credentials = {username: '', password: ''};

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: NgbModal,
              private accountService: AccountService,
              private http: HttpClient,
              private app: AppService) { }

  ngOnInit(): void {

  }

  login() {
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }

  goToRegisterAcc(): void {
    this.router.navigateByUrl('/register-account');
  }
}
