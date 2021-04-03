import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSummaryComponent } from './restaurant-summary.component';

describe('RestaurantSummaryComponent', () => {
  let component: RestaurantSummaryComponent;
  let fixture: ComponentFixture<RestaurantSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
