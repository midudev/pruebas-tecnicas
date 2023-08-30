import { TestBed } from '@angular/core/testing';

import { DataBooksService } from './data-books.service';

describe('DataBooksService', () => {
  let service: DataBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
