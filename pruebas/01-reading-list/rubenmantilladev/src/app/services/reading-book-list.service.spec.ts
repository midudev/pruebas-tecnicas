import { TestBed } from '@angular/core/testing';

import { ReadingBookListService } from './reading-book-list.service';

describe('ReadingBookListService', () => {
  let service: ReadingBookListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingBookListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
