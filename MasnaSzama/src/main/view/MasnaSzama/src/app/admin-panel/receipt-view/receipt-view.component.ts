import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.css']
})
export class ReceiptViewComponent implements OnInit {

  id: number;
  private sub: any;
  tableService: any;

  date: any;

  receiptItemList: any;
  finalList: any = [];
  finalPrice: number = 0;
  finalItems: number = 0;

  temp: any;
  ngay: any;
  thang: any;
  nam: any;
  gio: any;
  phut: any;
  giay: any;

  constructor(private route: ActivatedRoute, tableService: TableService) { 
    this.tableService = tableService;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });  
    this.temp = new Date();
    this.ngay = this.temp.getDate();
    this.thang = this.temp.getMonth()+1;
    this.nam = this.temp.getFullYear();

    this.gio = this.temp.getHours();
    this.phut = this.temp.getMinutes();
    this.giay = this.temp.getSeconds();

    this.getList();
    this.formatDate();
  }

  ngOnInit() {
    //window.print(); 
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getList(){
    try{
          this.receiptItemList = this.tableService.getMenuList(this.id);
          this.finalPrice = this.tableService.getMenuListTotalPrice(this.id);
          this.finalItems = this.tableService.getMenuListTotalItem(this.id);
          //trying to get the list of items with quantity > 0
          for(var item in this.receiptItemList){
            if(this.receiptItemList[item].itemQuantity != 0) this.finalList.push(this.receiptItemList[item]);
          }
       }catch(e) {}
  }


  formatDate(){

    var temp2 = this.ngay + '/' + this.thang + '/' + this.nam + '-' + this.gio + ':' + this.phut;

    this.date = temp2;


  }

  onClick(){
    var d = new Date();
    console.log(d);
  }

  onConfirm(){
    //var ran = Math.floor((Math.random() * 10) + 1);
    //window.print();
    var formatedDate = this.nam+"-"+this.thang+"-"+this.ngay+" "+this.gio+":"+this.phut+":"+this.giay;
    //console.log(formatedDate);
    for(var item in this.finalList){
      this.finalList[item]['month'] = this.thang;
      this.finalList[item]['day'] = this.ngay;
      this.finalList[item]['itemDate'] = formatedDate;
      //console.log(this.finalList[item]);
    }
    this.tableService.addRecord(this.finalList).subscribe(
      suc => {
        console.log(JSON.stringify(suc.message));
        //this.mess = JSON.stringify(suc.message);
        //this.tableService.refreshMenuListService();
        
      },
      err => {console.log(err);}
    );
  }

}
