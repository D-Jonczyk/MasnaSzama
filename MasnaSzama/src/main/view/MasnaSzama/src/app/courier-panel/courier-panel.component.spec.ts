import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierPanelComponent } from './courier-panel.component';

describe('CourierPanelComponent', () => {
  let component: CourierPanelComponent;
  let fixture: ComponentFixture<CourierPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
