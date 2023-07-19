import { TestBed } from '@angular/core/testing';

import { ReadingServiceService } from './reading-service.service';

describe('ReadingServiceService', () => {
  let service: ReadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
