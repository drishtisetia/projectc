import { TestBed } from '@angular/core/testing';

import { AddDealsServiceService } from './add-deals-service.service';

describe('AddDealsServiceService', () => {
  let service: AddDealsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDealsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
