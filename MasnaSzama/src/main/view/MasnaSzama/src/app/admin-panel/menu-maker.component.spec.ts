import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMakerComponent } from './menu-maker.component';

describe('MenuMakerComponent', () => {
  let component: MenuMakerComponent;
  let fixture: ComponentFixture<MenuMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
