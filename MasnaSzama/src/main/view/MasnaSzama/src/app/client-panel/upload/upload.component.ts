import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

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
