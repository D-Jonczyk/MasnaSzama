import { TestBed } from '@angular/core/testing';

import { RestaurantSummaryService } from './restaurant-summary.service';

describe('RestaurantSummaryService', () => {
  let service: RestaurantSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
