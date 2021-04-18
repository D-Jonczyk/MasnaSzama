import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierOrderhistoryComponent } from './courier-orderhistory.component';

describe('CourierOrderhistoryComponent', () => {
  let component: CourierOrderhistoryComponent;
  let fixture: ComponentFixture<CourierOrderhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierOrderhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
