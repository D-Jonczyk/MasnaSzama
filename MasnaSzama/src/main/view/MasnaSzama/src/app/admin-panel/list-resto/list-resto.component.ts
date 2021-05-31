import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  alert:boolean= false;
public collection:any= [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }
  deleteResto(resto){
    this.collection.splice(resto.id,-1)
    this.commonService.deleteResto(resto).subscribe((result)=>{
      console.log("Dane wykasowane", result)
      this.alert= true;
    })
  }
  closeAlert(){
    this.alert= false;
  }

}
