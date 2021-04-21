import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  public tableService;
  private selectedItem;
  public name;

  constructor(tableService: TableService, private router: Router, private route: ActivatedRoute) {
    this.tableService = tableService;
  }

  ngOnInit() {

  }

  private deleteItem(item){
    this.tableService.deleteProduct(item).subscribe(x =>{
      console.log(JSON.stringify(x));
      this.tableService.refreshMenuListService();
      //alert(JSON.stringify(x));
      //this.route.navigate(['/menu-manage']);
    });
  }

  private editClick(item){
    this.tableService.setSingleItem(item);
  }

  //format number to currency
  private numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  @ViewChild('myModal')
    modal: BsModalComponent;
    animation: boolean = true;

    close() {
        this.modal.close();
        this.deleteItem(this.selectedItem);
    }

    open(item) {
        this.selectedItem = item;
        this.name= this.selectedItem.itemName;
        this.modal.open();
    }

    dismiss(){
      this.modal.dismiss();
    }

}
