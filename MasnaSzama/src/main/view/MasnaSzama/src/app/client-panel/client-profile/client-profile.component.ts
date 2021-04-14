import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {


  constructor( private router: Router,) { }

 uploadClick(): void {
        this.router.navigateByUrl('/upload');
      }
 logoutClick(): void {
        this.router.navigateByUrl('/client-panel');
      }
  ngOnInit(): void {
  }

}
