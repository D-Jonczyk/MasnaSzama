import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
title = 'Admin dashboard'
  constructor(
    private route: ActivatedRoute,
  ) { }


  isUser: boolean;

  ngOnInit(): void {
  }

}
