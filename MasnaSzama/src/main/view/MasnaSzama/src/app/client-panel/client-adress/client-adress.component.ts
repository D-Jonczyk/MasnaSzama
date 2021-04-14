import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-client-adress',
  templateUrl: './client-adress.component.html',
  styleUrls: ['./client-adress.component.css']
})
export class ClientAdressComponent implements OnInit {

  constructor(private router: Router) { }

 logoutClick(): void {
        this.router.navigateByUrl('/client-panel');
      }
  ngOnInit(): void {
  }

}
