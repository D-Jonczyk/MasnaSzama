import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-manage',
  templateUrl: './menu-manage.component.html',
  styleUrls: ['./menu-manage.component.css']
})
export class MenuManageComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;
  insertBreak: any;

  constructor(private route: ActivatedRoute) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    this.insertBreak = false;
    if(this.innerWidth >= 764){
      this.insertBreak = true;
    }
    //console.log(this.insertBreak);
   }

  ngOnInit() {
    
  }

}
