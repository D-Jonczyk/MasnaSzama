import { Component, OnInit } from '@angular/core';
import {CourierPanelComponent} from '../../courier-panel.component';

@Component({
  selector: 'app-send-availabilities',
  templateUrl: './send-availabilities.component.html',
  styleUrls: ['../../courier-panel.component.css', './send-availabilities.component.css']
})
export class SendAvailabilitiesComponent extends CourierPanelComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
