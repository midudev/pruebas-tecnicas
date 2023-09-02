import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBooksComponent } from './list-of-books.component';
import { ReadingListComponent } from '../../components/reading-list/reading-list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Books } from '../../interfaces/types';

describe('ListOfBooksComponent', () => {
  let component: ListOfBooksComponent;
  let fixture: ComponentFixture<ListOfBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FiltersComponent,
        ListOfBooksComponent,
        ReadingListComponent,
      ],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(ListOfBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test_add_to_reading_list_edge_case_already_exists', () => {
    const ISBN = '123';
    const book = {
      book: {
        title: 'El Señor de los Anillos',
        pages: 1200,
        genre: 'Fantasía',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
        synopsis:
          'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
        year: 1954,
        ISBN,
        author: {
          name: 'J.R.R. Tolkien',
          otherBooks: ['El Hobbit', 'El Silmarillion'],
        },
      },
    };
    const originalBooks: Books[] = [book];
    const readingList: Books[] = [book];
    const component = new ListOfBooksComponent();
    component.originalBooks = originalBooks;
    component.books = originalBooks;
    component.readingList = readingList;

    component.addToReadingList(ISBN);

    expect(component.readingList).toEqual([book]);
  });

  it('test_remove_book_from_reading_list', () => {
    const component = new ListOfBooksComponent();
    component.readingList = [
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
      {
        book: {
          title: 'Juego de Tronos',
          pages: 694,
          genre: 'Fantasía',
          cover:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
          synopsis:
            'En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.',
          year: 1996,
          ISBN: '978-0553103540',
          author: {
            name: 'George R. R. Martin',
            otherBooks: [
              'Choque de Reyes',
              'Tormenta de Espadas',
              'Festín de Cuervos',
            ],
          },
        },
      },
      {
        book: {
          title: 'Harry Potter y la piedra filosofal',
          pages: 223,
          genre: 'Fantasía',
          cover:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg',
          synopsis:
            'Un niño descubre que es un mago y comienza una aventura en una escuela de magia.',
          year: 1997,
          ISBN: '978-0747532699',
          author: {
            name: 'J.K. Rowling',
            otherBooks: [
              'Harry Potter y la cámara secreta',
              'Harry Potter y el prisionero de Azkaban',
              'Harry Potter y el cáliz de fuego',
            ],
          },
        },
      },
    ];

    component.handleRemove('978-0618640157');

    expect(component.readingList).toEqual([
      {
        book: {
          title: 'Juego de Tronos',
          pages: 694,
          genre: 'Fantasía',
          cover:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
          synopsis:
            'En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.',
          year: 1996,
          ISBN: '978-0553103540',
          author: {
            name: 'George R. R. Martin',
            otherBooks: [
              'Choque de Reyes',
              'Tormenta de Espadas',
              'Festín de Cuervos',
            ],
          },
        },
      },
      {
        book: {
          title: 'Harry Potter y la piedra filosofal',
          pages: 223,
          genre: 'Fantasía',
          cover:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg',
          synopsis:
            'Un niño descubre que es un mago y comienza una aventura en una escuela de magia.',
          year: 1997,
          ISBN: '978-0747532699',
          author: {
            name: 'J.K. Rowling',
            otherBooks: [
              'Harry Potter y la cámara secreta',
              'Harry Potter y el prisionero de Azkaban',
              'Harry Potter y el cáliz de fuego',
            ],
          },
        },
      },
    ]);
  });

  it('test_reading_list_is_empty', () => {
    const component = new ListOfBooksComponent();
    component.handleRemove('123');
    expect(component.readingList.length).toBe(0);
  });
});
