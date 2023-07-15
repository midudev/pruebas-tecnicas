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
  current_books: Book[] = [];
  read_books: Book[] = [];
  min_pages: number = 0;
  max_pages: number = 0;
  pages: number = 0;
  genres: string[] = [];
  genre: string = "Todos";
  books_read: string[] = [];
  storageKey: string = "books";

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    //init array books
    this.books = this.bookService.getBooks();
    this.getLimitPages()
    this.pages = this.max_pages
    this.getGenres()

    const storedBooks = localStorage.getItem(this.storageKey);
    if (storedBooks) {
      this.books_read = JSON.parse(storedBooks);
    }

    window.addEventListener('storage', (event) => {
      if (event.key === this.storageKey) {
        this.books_read = JSON.parse(event.newValue ? event.newValue : "");
        this.getCurrentsBooks();
      }
    });
    this.getCurrentsBooks()
  }

  //set the max and min pages
  getLimitPages() {
    this.books.forEach((book) => {
      if (book.pages < this.min_pages || this.min_pages == 0) {
        this.min_pages = book.pages
      }
      if (this.max_pages < book.pages) {
        this.max_pages = book.pages
      }
    });
  }

  changePages(pages: number) {
    this.pages = pages
    this.getCurrentsBooks()
  }

  getGenres() {
    this.genres.push("Todos")
    this.books.forEach(book => {
      if (this.genres.indexOf(book.genre) < 0) {
        this.genres.push(book.genre)
      }
    });

  }

  //this function apply the current filters from all books
  getCurrentsBooks() {
    this.current_books = this.books.filter((book) => {

      if (this.genre != 'Todos') {
        if (this.genre != book.genre) {
          return false
        }
      }

      if (this.books_read.indexOf(book.title) >= 0) {
        return false
      }

      return book.pages <= this.pages
    })

    this.read_books = this.books.filter((book) => {
      if (this.books_read.indexOf(book.title) < 0) {
        return false
      }
      return true
    })
  }

  addBook(book: Book) {
    this.books_read.push(book.title)
    this.getCurrentsBooks()
    localStorage.setItem(this.storageKey, JSON.stringify(this.books_read));
  }

  removeBook(book: Book) {
    this.books_read.splice(this.books_read.indexOf(book.title), 1);
    this.getCurrentsBooks()
    localStorage.setItem(this.storageKey, JSON.stringify(this.books_read));
  }

}

