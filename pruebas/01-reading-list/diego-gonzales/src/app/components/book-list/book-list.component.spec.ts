import { TestBed, type ComponentFixture } from '@angular/core/testing';
import BookListComponent from './book-list.component';
import { BooksService } from '~/services/books.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled: HTMLElement;
  let booksService: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookListComponent, HttpClientTestingModule],
      providers: [BooksService, provideRouter([])],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should load data and select favorite book', () => {
    const dummyData = {
      library: [
        {
          book: {
            title: 'El Señor de los Anillos',
            pages: 1200,
            genre: 'Fantasía',
            cover:
              'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
            synopsis:
              'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
            year: 1954,
            ISBN: '978-0618640157',
            author: {
              name: 'J.R.R. Tolkien',
              otherBooks: ['El Hobbit', 'El Silmarillion'],
            },
          },
        },
      ],
    };

    const testRequest = httpMock.expectOne('assets/data.json');
    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(dummyData);
    fixture.detectChanges();

    const image = compiled.querySelector('img');
    expect(image?.src).toContain(dummyData.library[0].book.cover);

    const bookList = component.bookList();
    expect(bookList.length).toBe(1);

    const book = bookList[0];
    expect(book.title).toBe(dummyData.library[0].book.title);
    expect(book.author.name).toBe(dummyData.library[0].book.author.name);
    expect(book.genre).toBe(dummyData.library[0].book.genre);
    expect(book.year).toBe(dummyData.library[0].book.year);
    expect(book.pages).toBe(dummyData.library[0].book.pages);
    expect(book.synopsis).toBe(dummyData.library[0].book.synopsis);
    expect(book.ISBN).toBe(dummyData.library[0].book.ISBN);
    expect(book.isFavorite).toBe(undefined);

    const favoriteButton = compiled.querySelector('button');
    expect(favoriteButton?.textContent).toContain('♡');

    favoriteButton?.click();
    fixture.detectChanges();

    expect(book.isFavorite).toBe(true);
    expect(favoriteButton?.textContent).toContain('♥');
    expect(booksService.readingList().length).toBe(1);

    favoriteButton?.click();
    fixture.detectChanges();

    expect(book.isFavorite).toBe(false);
    expect(favoriteButton?.textContent).toContain('♡');
    expect(booksService.readingList().length).toBe(0);
  });
});
