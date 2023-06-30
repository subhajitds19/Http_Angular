import { TestBed } from '@angular/core/testing';

import { RegSerService } from './reg-ser.service';

describe('RegSerService', () => {
  let service: RegSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
