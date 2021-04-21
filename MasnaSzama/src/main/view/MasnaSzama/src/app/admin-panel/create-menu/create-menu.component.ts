import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper} from 'angular2-jwt';
import { TableService } from '../table.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { BsModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  jwt: string;
  jwtDate: any;
  jwtExpired: any;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();

  public form: FormGroup;
  public itemName;
  public itemPrice;
  public mess;
  public mess_content;
  public check;

  constructor(public fb: FormBuilder, public router: Router, public tableService: TableService) {
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
    this.jwtDate = this.jwtHelper.getTokenExpirationDate(this.jwt);
    this.jwtExpired = this.jwtHelper.isTokenExpired(this.jwt);

    this.form = this.fb.group({
      itemName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(1), Validators.maxLength(15)])],
      itemPrice: ['', Validators.compose([Validators.required, Validators.pattern('[0-9,]*')])],
    });

  }


  public onSubmit(item: any): void {
    console.log('Reactive Form Data: ');
    //format input string for price
    item['itemPrice'] = item.itemPrice.replace(/\,/g,'');

    //get next available item UID
    var get_last_id = this.tableService.menuList[this.tableService.menuList.length-1];
    let last_id: number = get_last_id.itemUID;
    last_id++;
    item['itemUID'] = last_id;

    console.log(item);
    this.open();


    /*Adds item information to the databse
    this.tableService.createProduct(item).subscribe(
      suc => {

        this.checkRes((suc));

        this.tableService.refreshMenuListService();
      },
      err => {console.log(err);}
    );*/
  }

  //decide status of the request
  private checkRes(x)
  {
    //shit code
    var c = JSON.stringify(x);
    var temp = JSON.parse(c);

    console.log(temp.message);
    if(temp.message == 0){
      //console.log("HERE1");
      this.mess = "Thất bại";
      this.mess_content = "Thử lại ?";
      this.check = false;
    }else if(temp.message == 1 ){
      //console.log("HERE2");
      this.mess = "Thành công";
      this.mess_content = "Tạo thêm món mới ?";
      this.check = true;
      this.form.reset();
    }
  }

  ngOnInit() {

  }

  //ModalComponent
  @ViewChild('myModal')
    modal: BsModalComponent;
    animation: boolean = true;

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }

    dismiss(){
      this.modal.dismiss();
      if(this.check){this.router.navigateByUrl('/menu-manage/edit')};
    }


}
