import { TestBed } from '@angular/core/testing';

import { MobileService } from './mobile.service';

describe('MobileServiceService', () => {
  let service: MobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
