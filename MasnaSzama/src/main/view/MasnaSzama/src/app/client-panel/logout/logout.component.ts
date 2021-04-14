import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(
                private router: Router,
               )
    { }

     logoutClick(): void {
        this.router.navigateByUrl('/main');
      }

  ngOnInit(): void {
  }

}
