import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuUpdatePanelComponent } from './restaurant-menu-update-panel.component';

describe('RestaurantMenuUpdatePanelComponent', () => {
  let component: RestaurantMenuUpdatePanelComponent;
  let fixture: ComponentFixture<RestaurantMenuUpdatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantMenuUpdatePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuUpdatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
