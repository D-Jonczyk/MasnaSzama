import { Component, OnInit } from '@angular/core';
import { MyHomeComponent } from '../my-home/my-home.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router) { }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }
  
  l

}
