import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup} from '@angular/forms';

import {MenuMakerService} from '../menu-maker.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  optionCreatorForm: FormGroup;
  optionsArray: FormArray;

  constructor(private menuMakerService: MenuMakerService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.optionCreatorForm = this.formBuilder.group({
      name: '',
      optionsArray: this.formBuilder.array([this.createOption()]),
      requireRule: '',
      totalRule: '',
      totalRuleNumber: ''
    });
  }

  createOption(): FormGroup {
    return this.formBuilder.group({
      optionName: '',
      optionPrice: ''
    });
  }

  onAddOption() {
    this.optionsArray = this.optionCreatorForm.get('optionsArray') as FormArray;
    this.optionsArray.push(this.createOption());
    console.log(this.optionsArray);
  }

}
