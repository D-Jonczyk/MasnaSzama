import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MenuMakerService} from '../menu-maker.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menuCreatorForm: FormGroup;
  constructor(private menuMakerService: MenuMakerService) {}

  ngOnInit(): void {
    this.menuCreatorForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  reset(): void {
    this.menuCreatorForm.reset();
  }

  onSubmit(): void {
    const menuName = {menuName: this.menuCreatorForm.value.name};

    console.log(menuName);

    this.menuMakerService.saveMenu(menuName);

    this.menuCreatorForm.reset();
  }
}
