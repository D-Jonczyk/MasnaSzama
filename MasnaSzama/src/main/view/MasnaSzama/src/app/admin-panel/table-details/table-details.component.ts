import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../table.service';
import { BsModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  id: number;
  private sub: any;
  tableService:any;
  data: any;

  stringPrice: string

  isHighlight: any = [];

  receiptItemList: any;
  finalList: any = [];
  finalPrice: number = 0;
  finalItems: number = 0;
  isInfo = false;

  public rowsOnPage = 10;

  constructor(private route: ActivatedRoute, tableService: TableService, private router: Router) {
    this.tableService = tableService;
    this.tableService.addMenuList(this.id);
    this.data = this.tableService.getMenuList(this.id);
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       this.tableService.addMenuList(this.id);
       this.data = this.tableService.getMenuList(this.id) ;

    });
    //initiate array for storing highlights
    for(var item in this.tableService.menuList){
         //console.log(item);
         this.isHighlight.push("");
    }
  }

  ngDoCheck(){
    //console.log(this.uniqueMenuList);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private increaseClick(item,index){
    //get the specific object and increase the quantity
    this.data.filter(x => x == item)[0].itemQuantity += 1;

    //calculate total price
    let totalPrice = 0;
    totalPrice = parseInt(this.data.filter(x => x == item)[0].itemPrice);
    this.tableService.addMenuListTotalPrice(this.id,totalPrice);

    this.stringPrice = this.tableService.getMenuListTotalPrice(this.id);

    //put the highlight index
    this.isHighlight[index] = "success";
  }


  private decreaseClick(item,index){

    //limit not below 0
    if(this.data.filter(x => x == item)[0].itemQuantity > 0){
       this.data.filter(x => x == item)[0].itemQuantity -= 1;

       let totalPrice = 0;
       totalPrice = parseInt(this.data.filter(x => x == item)[0].itemPrice);
       this.tableService.subMenuListTotalPrice(this.id,totalPrice);

       this.stringPrice = this.tableService.getMenuListTotalPrice(this.id);

       //put the highlight index
    }
    if(this.data.filter(x => x == item)[0].itemQuantity == 0) this.isHighlight[index] = "";
  }

  public cancelTable(){
    console.log("OPNE");
    var table = new Object;
    table['tableNo']= String(this.id);
    table['isActive'] = 0;

    this.tableService.tableStatus(table).subscribe(
      suc => {
        //console.log(JSON.stringify(suc.message));
        console.log(JSON.stringify(suc.message));
        this.router.navigate(['./select-table']);
      },
      err => {console.log(err);}
    );
    //this.tableService.instanceMenuList.filter(x => x.id == this.id)[0].list = [];
    this.finalList = [];
    this.receiptItemList = [];
    this.tableService.refreshTableListService();
    for(var item in this.data)
    {
      this.data[item].itemQuantity = 0;
    }
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

  public info(){
    this.getList();
    this.isInfo = true;
  }

  public switch(){
    this.isInfo = false;
    this.finalList = [];
  }

    //format number to currency
  public numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //ModalComponent
  @ViewChild('myModal')
    modal: BsModalComponent;
    animation: boolean = true;

    close() {
        this.modal.close();
        this.cancelTable();
    }

    open() {
        this.modal.open();
    }

    dismiss(){
      this.modal.dismiss();
    }
}
