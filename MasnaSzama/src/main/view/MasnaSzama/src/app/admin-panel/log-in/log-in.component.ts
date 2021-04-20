import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../header';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public router: Router, public http: Http, public auth: AuthService ) {
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
  ngOnInit() {
    this.auth.login()
  }

}
