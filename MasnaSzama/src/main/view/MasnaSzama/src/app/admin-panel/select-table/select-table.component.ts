import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttp ,JwtHelper} from 'angular2-jwt';
import { Http } from '@angular/http';
import { TableService } from '../table.service';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.css']
})
export class SelectTableComponent implements OnInit {

  jwt: string;
  jwtDate: any;
  jwtExpired: any;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();
  isAvailable: boolean = false;

  private loading: boolean;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp, public tableService: TableService) {
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
    this.jwtDate = this.jwtHelper.getTokenExpirationDate(this.jwt);
    this.jwtExpired = this.jwtHelper.isTokenExpired(this.jwt);
   }

  ngOnInit() {

  }

  ngDoCheck(){
    if(this.tableService.menuList != null) this.isAvailable = true;
  }

  public updateStatus(table){
    console.log(table);
    table['isActive'] = 1;

    this.tableService.tableStatus(table).subscribe(
      suc => {
        //console.log(JSON.stringify(suc.message));
        console.log(JSON.stringify(suc.message));
      },
      err => {console.log(err);}
    );
  }

  public refreshList(){
      this.tableService.refreshTableListService();
    }

}
