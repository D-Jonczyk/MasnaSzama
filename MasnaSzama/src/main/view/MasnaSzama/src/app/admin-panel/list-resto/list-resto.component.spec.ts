import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantComponent } from './list-resto.component';

describe('ListRestaurantComponent', () => {
  let component: ListRestaurantComponent;
  let fixture: ComponentFixture<ListRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
