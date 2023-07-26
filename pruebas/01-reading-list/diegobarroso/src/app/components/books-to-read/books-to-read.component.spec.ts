import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BookToReadComponent } from './books-to-read.component';
import { BooksService } from 'src/app/services/books.service';

describe('BookToReadComponent', () => {
  let component: BookToReadComponent;
  let fixture: ComponentFixture<BookToReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [BookToReadComponent],
      providers: [ BooksService ]
    });
    fixture = TestBed.createComponent(BookToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
