import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantComponent } from './update-resto.component';

describe('UpdateRestaurantComponent', () => {
  let component: UpdateRestoComponent;
  let fixture: ComponentFixture<UpdateRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRestotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
