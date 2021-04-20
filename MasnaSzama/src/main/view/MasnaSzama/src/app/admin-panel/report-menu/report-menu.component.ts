import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReportService } from '../report.service';


@Component({
  selector: 'app-report-menu',
  templateUrl: './report-menu.component.html',
  styleUrls: ['./report-menu.component.css']
})


export class ReportMenuComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    }
  };
  
  data = [
    // ... our data here
  ];
  

  public form: FormGroup;
  queryJSON: any;
  fromDate;
  toDate;

  constructor(public fb: FormBuilder, public reportService : ReportService) {
    this.form = this.fb.group({
      fromDate: ['', Validators.compose([Validators.required])],
      toDate: [''],
    });

   }

   public onSubmit(item: any): void {
    //this.listRecords = [];
    console.log('Reactive Form Data: ');
    console.log(item);
    //if(item.fromDate == item.toDate){console.log("true");}

    let command: number;
    let year: number;
    let day: number;
    let month: number;
    let day_end: number;
    let month_end: number;
    let year_end: number;

    //console.log(item.fromDate.substr(8,2));

    if(item.fromDate == item.toDate || item.toDate == undefined){
      //console.log("command 1");
      command = 1;

      year = item.fromDate.substr(0,4);
      day = item.fromDate.substr(8,2);
      month = item.fromDate.substr(5,2);

      this.queryJSON = new queryObject(command,year,month,day);
      //console.log(this.queryJSON);
      this.reportService.requestQuery(this.queryJSON);
      
      //setTimeout(()=>{console.log(this.reportService.listRecords)},2000);
    }else if (item.toDate != undefined){
      //console.log("command 2");
      command = 2;
      year = item.fromDate.substr(0,4);
      day = item.fromDate.substr(8,2);
      month = item.fromDate.substr(5,2);

      year_end = item.toDate.substr(0,4);
      day_end = item.toDate.substr(8,2);
      month_end = item.toDate.substr(5,2);

      this.queryJSON = new queryObject2(command,year,month,day,year_end,month_end,day_end);
      this.reportService.requestQuery(this.queryJSON);
      //console.log(JSON.stringify( this.queryJSON));

      //setTimeout(()=>{console.log(this.reportService.listRecords)},2000);

    }

  }

  ngOnInit() {
  }

  ngOnChanges(){
    
  }
}

//{"command":"1", "year": "input_year","month:"input_month","date":"input_date"}

//{"command":"2", "year": "input_year","month:"input_month","date":"input_date" ,
// "year_end": "input_year","month_end:"input_month","date_end":"input_date"}

class queryObject{
  command: any;
  year: any;
  month: any;
  day: any;
  
  constructor(com,y,m,d){
    this.command = com;
    this.year = y;
    this.month = m;
    this.day = d;
  }
}

class queryObject2{
  command: number;
  year: number;
  month: number;
  day: number;
  year_end: number;
  month_end: number;
  day_end: number
  
  constructor(com,y,m,d,y_end,m_end,d_end){
    this.command = com;
    this.year = y;
    this.month = m;
    this.day = d;
    this.year_end = y_end;
    this.month_end = m_end;
    this.day_end = d_end;
  }
}

