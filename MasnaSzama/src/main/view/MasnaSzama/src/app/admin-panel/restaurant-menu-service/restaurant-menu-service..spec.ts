import { TestBed } from '@angular/core/testing';

import { RestaurantMenuServiceService } from './restaurant-menu-service.service';

describe('RestaurantMenuServiceService', () => {
  let service: RestaurantMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
