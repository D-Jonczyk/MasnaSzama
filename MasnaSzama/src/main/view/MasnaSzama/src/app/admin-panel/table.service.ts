import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

  //public tableList = []; // for JSON DATA
  public tableList: Array<Table> = []; //list to store table objects
  public menuList: Array<Item> = []; //list to store table objects
  public instanceMenuList: Array<List> = [];
  public singleItem: any ;
  

  constructor(public http: Http) { 
    this.getTableListService();
    this.getMenuListService();   
  }

  //
  //READ 
  //

  // get the list of tables available 
  private getTableListService(){
    var eventData: any = this.http.get('http://kiemsi-khatmau.000webhostapp.com/api/product/test.php');
    eventData.subscribe(info => {
                  let response = JSON.parse(info._body);
                  for(var item in response){
                    //console.log(response[item].id);
                    var id = response[item].id;
                    var active2 = response[item].active;
                    //not yet pass in the menu object
                    this.tableList.push(new Table(id,active2));
                  }
                  //console.log(response);
            },
            error => {alert(error)});            
  }
  // get the list of foods for the menu
  private getMenuListService(){
    var eventData: any = this.http.get('https://kiemsi-khatmau.000webhostapp.com/api/product/test2.php');
    eventData.subscribe(info => {
                  let response = JSON.parse(info._body);
                  for(var item in response){
                    //console.log(response[item].id);
                    var uid = response[item].uid;
                    var name = response[item].name;
                    var price = response[item].price;
                    //not yet pass in the menu object
                    this.menuList.push(new Item(name,price,uid));
                  }
                  //console.log(response);
            },
            error => {alert(error)});   
  }

  //fetch new data
  public refreshMenuListService(){
    console.log("refreshing menu..");
    this.menuList = [];
    this.getMenuListService();
  }

  public refreshTableListService(){
    console.log("refreshing menu..");
    this.tableList = [];
    this.getTableListService();
  }

  //add an instance of menu based on table ID
  public addMenuList(num){

    console.log(num);

    //clone object arary
    if(this.instanceMenuList.filter(x => x.id == num)[0] != null){
      return;
    }
    let tempList = this.menuList.map(x => Object.assign({}, x));
    this.instanceMenuList.push(new List(num,tempList));

    //console.log(this.instanceMenuList);
  }

  public getMenuList(num){
    return this.instanceMenuList.filter(x => x.id == num)[0].list;
  }

  public addMenuListTotalPrice(num, price){
    this.instanceMenuList.filter(x => x.id == num)[0].totalPrice += price;
    //console.log(this.instanceMenuList);
  }

  public subMenuListTotalPrice(num, price){
    this.instanceMenuList.filter(x => x.id == num)[0].totalPrice -= price;
    //console.log(this.instanceMenuList);
  }

  public getMenuListTotalPrice(num){
    return this.numberWithCommas(this.instanceMenuList.filter(x => x.id == num)[0].totalPrice);
  }

  public getMenuListTotalItem(num){
    var total = 0;
    for(var item in this.instanceMenuList.filter(x => x.id == num)[0].list){
      if(this.instanceMenuList.filter(x => x.id == num)[0].list[item].itemQuantity != 0){
        total += this.instanceMenuList.filter(x => x.id == num)[0].list[item].itemQuantity;
      }
    }
    return total;
  }

  //format number to currency 
  private numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  //get single object
  public setSingleItem(item){
    this.singleItem = item;
  }

  //
  //MODIFY 
  //
  

  //create item in menu list
  public createProduct(product): any {
    var encoded = JSON.stringify(product);
    console.log("create called");
    //console.log(encoded);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
 
    return this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/create.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server errorr'));
  }

  //delete item in menu list
  public deleteProduct(product): any {
    var encoded = JSON.stringify(product);
    console.log("create called");
    //console.log(encoded);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
 
    return this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/delete.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server errorr'));
  }

  //update item in menu list
   public updateProduct(product): any {
    //console.log(product);
    var encoded = JSON.stringify(product);
    console.log("update called");
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
 
    return this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/update.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //temp.subscribe(x =>{});
  }

  // add / delete tables
  public modifyTable(product): any{
    var encoded = JSON.stringify(product);
    console.log("table modify called");

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/modTable.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server errorr'));

  }

  //add reports 
  public addRecord(product): any{
    var encoded = JSON.stringify(product);
    console.log("table status called");
    //console.log(encoded);
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/insertRecord.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server errorr'));
    
  }

  //update table status
   public tableStatus(product): any {
    //console.log(product);
    var encoded = JSON.stringify(product);
    console.log("table update called");
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
 
    return this.http.post(
        "https://kiemsi-khatmau.000webhostapp.com/api/product/tableStatus.php",
        encoded,
        options
    ).map(x => x.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //temp.subscribe(x =>{});
  }


}

//class for a Table
class Table {
  tableNo: number;
  isActive: boolean;
  menuList: Menu;
  
  constructor(num, active){
    this.tableNo = num;
    if(active == 0) this.isActive = false;
    else this.isActive = true;
  }
}

//class for a Menu, storing list of Items
class Menu{
  list: Array<Item> = [];
}


//class for single Item
class Item{
  itemName: string;
  itemPrice: number;
  itemUID: number;
  itemQuantity: number;

  constructor(name, price, UID){
    this.itemName = name;
    this.itemPrice = price;
    this.itemUID = UID;
    this.itemQuantity = 0;
  }
}

class List{
  id: string;
  list: any;
  totalPrice: number;

  constructor(id, list){
    this.id = id;
    this.list = list;
    this.totalPrice = 0;
  }
}