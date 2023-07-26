import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BehaviorSubject, Observable, of } from 'rxjs';
import  books from '../data/books.json';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[] = [];
  private bookDetail!: Book;
  private booksSubject = new BehaviorSubject<Book[]>([]);
  private bookDetailSubject = new BehaviorSubject<Book | null>(null);
  private booksToReadNumberSubject = new BehaviorSubject<number>(0);
  private genresSubject = new BehaviorSubject<string[]>([]);

  getBookList(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }
  getBookDetail(): Observable<Book | null> {
    return this.bookDetailSubject.asObservable();
  }
  getBook(id: string) {
    let book: Book;
    if (localStorage.getItem('books') !== 'null') {
      const books = JSON.parse(localStorage.getItem('books')!);
      book = books.find ((b: Book) => b.ISBN === id);
    } else {
    book = this.books.find(b => b.ISBN === id)!;
    }
    this.updateBookDetail(book);
    return of(book);
  }
  getBookListToReadNumber(): Observable<number> {
    return this.booksToReadNumberSubject.asObservable();
  }
  getGenres(): Observable<string[]> {
    return this.genresSubject.asObservable();
  }
  
  getBooks(): Observable<Book[]> {
    let bookList: Book[] = [];
    if (localStorage.getItem('books') !== 'null') {
      bookList = JSON.parse(localStorage.getItem('books')!);
    } else {
      bookList = books.library.map((item) => {
        return {...item.book, inListToRead: false}
      });
    }
    
    this.updateBooks(bookList);
    this.updateBookListToReadNumber();
    this.updateGenres();
    console.log('Books', bookList)
    return of(bookList);
  }

  addOrRemoveBook(book: Book) {
    const bookToMove = this.books.findIndex(b => b.ISBN === book.ISBN)
    if (bookToMove > -1 ) {
      this.books[bookToMove].inListToRead = !this.books[bookToMove].inListToRead;
    }
    this.updateBooks(this.books);
    this.updateBookListToReadNumber();
    this.updateBookDetail(this.books[bookToMove]);
  }
  
  updateBookListToReadNumber() {
    const bookToReadNumber = this.books?.filter(b => b.inListToRead).length;
    this.booksToReadNumberSubject.next(bookToReadNumber)
  }

  updateBooks(books: Book[]) {
    localStorage.setItem('books', JSON.stringify(books));
    this.books = books;
    this.booksSubject.next(this.books);
  }
  updateBookDetail(book: Book | undefined) {
    if (book) {
      this.bookDetail = book;
      this.bookDetailSubject.next(this.bookDetail);
    }
  }

  updateGenres() {
    const genres = this.books.map(b => b.genre);
    this.genresSubject.next([... new Set(genres)])
  }
}
