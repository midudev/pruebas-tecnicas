import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBooksTableComponent } from './reading-books-table.component';

describe('ReadingBooksTableComponent', () => {
  let component: ReadingBooksTableComponent;
  let fixture: ComponentFixture<ReadingBooksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReadingBooksTableComponent],
    });
    fixture = TestBed.createComponent(ReadingBooksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
