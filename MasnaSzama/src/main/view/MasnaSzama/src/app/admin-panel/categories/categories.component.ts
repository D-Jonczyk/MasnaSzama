import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {MenuMakerService} from '../menu-maker.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryCreatorForm: FormGroup;
  menus = [{}];
  outputMenus = [];

  constructor(private menuMakerService: MenuMakerService) { }

  ngOnInit(): void {
    this.categoryCreatorForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      menusControlArray: new FormArray([], [Validators.required]),
    });


    /*React out to service to fetch available Menus*/
    this.menuMakerService
      .getMenus()
      .subscribe((response) => {
        console.log(response.message);
        this.menus = response.data;
        console.log(this.menus);
        this.addCheckboxes(); /*generate list of menu checkbox*/
      });
  }

  /*Loop through menus array and create control array for reactive form usage*/
  private addCheckboxes(): void {
    this.menus.map(() => {
      const control = new FormControl();
      (this.categoryCreatorForm.get('menusControlArray') as FormArray).push(control);
    });
  }

  reset(): void {
    this.categoryCreatorForm.reset();
  }

}
