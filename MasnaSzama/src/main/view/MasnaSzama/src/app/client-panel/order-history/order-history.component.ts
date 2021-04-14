import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

 constructor(private router: Router) { }

 logoutClick(): void {
        this.router.navigateByUrl('/client-panel');
      }

  ngOnInit(): void {
  }

}
