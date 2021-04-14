import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-schedule-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ShowScheduleContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['../../courier-panel.component.css', './show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  links = [
    { title: 'Nawigacja', fragment: '/navigation' },
    { title: 'Lista zamówień', fragment: '/orderlist'},
    { title: 'Grafik', fragment: '/show-schedule'},
    { title: 'Mój profil', fragment: '/profile'},
    { title: 'Wsparcie kuriera', fragment: '/support'}
  ];

  currentDate = new Date();
  iterationDate: Date = new Date();
  first = this.currentDate.getDate() - this.currentDate.getDay();
  last = this.first + 6;

  firstDayOfTheWeek = new Date(this.currentDate.setDate(this.first));
  lastDayOfTheWeek = new Date(this.currentDate.setDate(this.last));

  diff = 1;
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  constructor(public route: ActivatedRoute, private library: FaIconLibrary, private modalService: NgbModal) {
    library.addIcons(faPlayCircle);
  }

  ngOnInit(): void {
  }

  open(): void {
    const modalRef = this.modalService.open(ShowScheduleContent);
    modalRef.componentInstance.name = 'World';
  }
}
