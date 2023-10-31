import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BookDetailComponent } from './book-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksService } from 'src/app/services/books.service';

describe('BookDetailComponent', () => {
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
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ RouterTestingModule],
      declarations: [BookDetailComponent],
      providers: [ BooksService ]
    });
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addOrRemoveBook', () => {
    spyOn(component, 'addOrRemoveBook').and.callThrough;
    component.addOrRemoveBook(book);
    expect(component.addOrRemoveBook).toHaveBeenCalledWith(book);
  });

  it('should call getBook', () => {
    spyOn(component, 'getBook').and.callThrough;
    const id = component.id = '978-4444532611';
    component.getBook(id);
    expect(component.getBook).toHaveBeenCalledWith(id);
  });
});
