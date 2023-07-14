import { Component } from '@angular/core';
import { BooksService } from '../books.service';

type Author = {
  name: string,
  otherBooks: string[]
}

type Book = {
  title: string,
  pages: number,
  genre: string,
  cover: string,
  synopsis: string,
  year: number,
  ISBN: string,
  author: Author
}

/*
"book": {
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
  }
}*/

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})

export class ListBooksComponent {

  books: Book[] = [];

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    //init array books
    this.books = this.bookService.getBooks();
  }

}

