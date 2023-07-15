import { Injectable } from '@angular/core';
import * as data from 'src/assets/books.json'
import { Book } from './books.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookListData: Array<Book> = [];
  private readingListData: Array<Book> = [];

  private _bookList: BehaviorSubject<Array<Book>>;
  private _readingBookList: BehaviorSubject<Array<Book>>;

  constructor() {
    this._bookList = new BehaviorSubject<Array<Book>>([]);
    this._readingBookList = new BehaviorSubject<Array<Book>>([]);
    this.initBookList();
  }

  //Initial data
  initBookList() {
    const { library } = data;
    const books: Array<Book> = library.map(e => e.book);
    this.bookListData = structuredClone(books);
    this._bookList.next(this.bookListData);
  }


  moveFromListToReadingList(book: Book, index: number) {
    this.deleteFromBookList(index);
    this.addToReadingList(book);
  }

  moveFromReadingListToList(book: Book, index: number) {
    this.deleteFromReadingList(index);
    this.addToBookList(book);
  }


  /** BOOK LIST */
  get bookList() {
    return this._bookList.asObservable();
  }

  addToBookList(book: Book) {
    this.bookListData.push(book);
    this._bookList.next(this.bookListData);
  }

  deleteFromBookList(index: number) {
    this.bookListData.splice(index, 1);
    this._bookList.next(this.bookListData);
  }


  /** READING LIST */
  get readingList() {
    return this._readingBookList.asObservable();
  }

  addToReadingList(book: Book) {
    this.readingListData.push(book);
    this._readingBookList.next(this.readingListData);
  }

  deleteFromReadingList(index: number) {
    this.readingListData.splice(index, 1);
    this._readingBookList.next(this.readingListData);
  }

}
