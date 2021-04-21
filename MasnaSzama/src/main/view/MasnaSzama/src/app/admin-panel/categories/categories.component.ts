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

  ngOnInit() {
    this.categoryCreatorForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'menusControlArray': new FormArray([], [Validators.required]),
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
  private addCheckboxes() {
    this.menus.map(() => {
      const control = new FormControl();
      (<FormArray>this.categoryCreatorForm.get('menusControlArray')).push(control);
    });
  }

  reset() {
    this.categoryCreatorForm.reset();
  }


  onSubmit() {

    const menusArray = this.categoryCreatorForm.controls.menusControlArray.value;
    for (let i = 0; i < menusArray.length; i++) {
      if (menusArray[i] === true) {
        this.outputMenus.push(this.menus[i]);
      }
    }

    const category = {categoryName: this.categoryCreatorForm.value.name, Menus: this.outputMenus};

    this.menuMakerService.saveCategory(category);

    this.reset();
  }

}
