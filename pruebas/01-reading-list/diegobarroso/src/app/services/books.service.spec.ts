import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { Book } from '../interfaces/book';

describe('BooksService', () => {
  const books: Book[] = [
    {
        "title": "El Señor de los Anillos",
        "pages": 1200,
        "genre": "Fantasía",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
        "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
        "year": 1954,
        "ISBN": "978-0618640157",
        "author": {
            "name": "J.R.R. Tolkien",
            "otherBooks": [
                "El Hobbit",
                "El Silmarillion"
            ]
        },
        "inListToRead": false
    },
    {
        "title": "Juego de Tronos",
        "pages": 694,
        "genre": "Fantasía",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
        "synopsis": "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
        "year": 1996,
        "ISBN": "978-0553103540",
        "author": {
            "name": "George R. R. Martin",
            "otherBooks": [
                "Choque de Reyes",
                "Tormenta de Espadas",
                "Festín de Cuervos"
            ]
        },
        "inListToRead": false
    },
    {
        "title": "Harry Potter y la piedra filosofal",
        "pages": 223,
        "genre": "Fantasía",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
        "synopsis": "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
        "year": 1997,
        "ISBN": "978-0747532699",
        "author": {
            "name": "J.K. Rowling",
            "otherBooks": [
                "Harry Potter y la cámara secreta",
                "Harry Potter y el prisionero de Azkaban",
                "Harry Potter y el cáliz de fuego"
            ]
        },
        "inListToRead": false
    },
    {
        "title": "1984",
        "pages": 328,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
        "synopsis": "Una inquietante visión de un futuro distópico y totalitario.",
        "year": 1949,
        "ISBN": "978-0451524935",
        "author": {
            "name": "George Orwell",
            "otherBooks": [
                "Rebelión en la granja"
            ]
        },
        "inListToRead": false
    },
    {
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
];
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the book list', (done) => {
    service.getBookList().subscribe((books) => {
      expect(books).toEqual(books);
      done();
    });
  });

});
