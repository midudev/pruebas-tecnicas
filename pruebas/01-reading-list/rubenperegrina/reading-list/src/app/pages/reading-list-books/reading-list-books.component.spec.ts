import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListBooksComponent } from './reading-list-books.component';

describe('ReadingListBooksComponent', () => {
  let component: ReadingListBooksComponent;
  let fixture: ComponentFixture<ReadingListBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReadingListBooksComponent],
    });
    fixture = TestBed.createComponent(ReadingListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
