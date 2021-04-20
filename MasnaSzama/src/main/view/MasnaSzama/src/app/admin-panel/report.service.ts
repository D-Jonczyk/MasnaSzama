import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ReportService {

  public listRecords: Array<reportItem> = [];

  constructor(public http: Http) {

   }

   public requestQuery(product): any {

    //empty the previous query 
    this.listRecords = [];

    var encoded = JSON.stringify(product);
    console.log("create called");
    //console.log(encoded);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
 
    var event =  this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/getRecord.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server errorr'));

    event.subscribe(info=>{
        //this.listRecords = info;
        for(var item in info){
          //console.log(info[item]);
          this.listRecords.push(new reportItem(info[item].uid,info[item].quantity,info[item].month,info[item].day,info[item].created));
        }
      });
   }
}

class reportItem{
  uid: number;
  quantity: number;
  month: number;
  day: number;
  date: number;
  
  constructor(uid,quan,mon,day,date){
    this.uid = uid;
    this.quantity = quan;
    this.month = mon;
    this.day = day;
    this.date = date;
  }
}
