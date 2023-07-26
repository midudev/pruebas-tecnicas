import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { BooksService } from 'src/app/services/books.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookComponent', () => {
  const book = {
    "title": "Apocalipsis Zombie",
    "pages": 444,
    "genre": "Zombies",
    "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
    "synopsis": "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
    "year": 2001,
    "ISBN": "978-4444532611",
    "author": {
        "name": "Manel Loreiro",
        "otherBooks": []
    },
    "inListToRead": false
}
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [BookComponent],
      providers: [ BooksService ]
    }).compileComponents();
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addOrRemoveBook', () => {
    spyOn(component, 'addOrRemoveBook').and.callThrough;
    component.addOrRemoveBook(book);
    expect(component.addOrRemoveBook).toHaveBeenCalledWith(book);
  });
});
