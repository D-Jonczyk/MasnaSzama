import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {MenuModel} from '../menu.model';
import { MenuMakerService} from '../menu-maker.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemCreatorForm: FormGroup;
  categories = [{}];


  constructor(private menuMakerService: MenuMakerService) { }

  ngOnInit() {
    this.itemCreatorForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'price': new FormControl(),
      'imagePath': new FormControl(),
      'category': new FormControl(),
      'optionsTitle': new FormControl(),
      'optionsDescription': new FormControl(),
      'choiceName': new FormControl(),
      'choicePrice': new FormControl(),
      'instructionsTitle': new FormControl(),
      'instructionsDescription': new FormControl(),
      'instructionsText': new FormControl()
    });


    this.menuMakerService
      .getCategories()
      .subscribe((response) => {
        console.log(response.message);
        this.categories = response.data;
        console.log(this.categories);
      });
  }
  onSubmit() {
    const itemMenus = this.itemCreatorForm.value.category.Menus;
    const itemCategory = this.itemCreatorForm.value.category.categoryName;
    const itemName = this.itemCreatorForm.value.name;
    const itemDescription = this.itemCreatorForm.value.description;
    const itemPrice = this.itemCreatorForm.value.price;
    const imagePath = this.itemCreatorForm.value.imagePath;
    const optionsTitle: string = this.itemCreatorForm.value.optionsTitle;
    const optionsDescription: string = this.itemCreatorForm.value.optionsDescription;
    const choiceName = this.itemCreatorForm.value.choiceName;
    const choicePrice = this.itemCreatorForm.value.choicePrice;
    const options = {title: optionsTitle, description: optionsDescription, choices: [{name: choiceName, price: choicePrice}]};
    const instructionTitle: string = this.itemCreatorForm.value.instructionsTitle;
    const instructionDescription: string = this.itemCreatorForm.value.instructionsDescription;
    const instructionText: string = this.itemCreatorForm.value.instructionsText;
    const instructions = {title: instructionTitle, description: instructionDescription, text: instructionText};
    const newItem = new MenuModel(itemMenus, itemCategory, itemName, itemDescription, imagePath, itemPrice, options, instructions);

    console.log(newItem);

    this.menuMakerService.sendUpdate(newItem);

    this.reset();
  }

  reset() {
    this.itemCreatorForm.reset();
  }

}
