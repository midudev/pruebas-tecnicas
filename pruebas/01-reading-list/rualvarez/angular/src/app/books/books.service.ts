import { Injectable } from '@angular/core';
import * as data from 'src/assets/books.json'
import { Book } from './books.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookListData: Array<Book> = [];
  private bookListDataFiltered: Array<Book> = [];
  private readingListData: Array<Book> = [];
  private genresListData: Array<string> = [];

  private _bookListFiltered: BehaviorSubject<Array<Book>>;
  private _readingBookList: BehaviorSubject<Array<Book>>;
  private _genresList: BehaviorSubject<Array<string>>;

  private genreAllOption: string = "Todos";
  private genreFilter: string = this.genreAllOption;

  constructor() {
    this._bookListFiltered = new BehaviorSubject<Array<Book>>([]);
    this._readingBookList = new BehaviorSubject<Array<Book>>([]);
    this._genresList = new BehaviorSubject<Array<string>>([]);

    this.initBookList();
    this.genresFromBookList(this.bookListDataFiltered);
  }

  //Initial data
  initBookList() {
    const { library } = data;
    const books: Array<Book> = library.map(e => e.book);
    this.bookListData = structuredClone(books);
    this.bookListDataFiltered = structuredClone(books);
    this._bookListFiltered.next(this.bookListDataFiltered);
  }


  moveFromListToReadingList(book: Book) {
    const bookIndex: number = this.getBookIndex(this.bookListData, book);
    this.deleteFromBookList(bookIndex);
    this.addToReadingList(book);
  }

  moveFromReadingListToList(book: Book) {
    const bookIndex: number = this.getBookIndex(this.readingListData, book);
    this.deleteFromReadingList(bookIndex);
    this.addToBookList(book);
  }


  /** BOOK LIST */
  get bookList() {
    return this._bookListFiltered.asObservable();
  }

  private getBookIndex(list: Array<Book>, book: Book) {
    return list.findIndex(b => b.ISBN === book.ISBN);
  }

  private addToBookList(book: Book) {
    this.bookListData.push(book);
    this.bookListDataFiltered = this.filterBookList(this.genreFilter);
    this._bookListFiltered.next(this.bookListDataFiltered);
  }

  private deleteFromBookList(index: number) {
    this.bookListData.splice(index, 1);
    this.bookListDataFiltered = this.filterBookList(this.genreFilter);
    this._bookListFiltered.next(this.bookListDataFiltered);
  }
  
  private filterBookList(genre: string) {
    let filterBooks: Array<Book> = [];
    if (genre === this.genreAllOption) filterBooks = structuredClone(this.bookListData);
    else filterBooks = this.bookListData.filter(book => book.genre === genre);

    return filterBooks;
  }

  filterBookListFromGenre(genre: string) {
    const filterBooks: Array<Book> = this.filterBookList(genre);
    this._bookListFiltered.next(filterBooks);
  }


  /** READING LIST */
  get readingList() {
    return this._readingBookList.asObservable();
  }

  private addToReadingList(book: Book) {
    this.readingListData.push(book);
    this._readingBookList.next(this.readingListData);
  }

  private deleteFromReadingList(index: number) {
    this.readingListData.splice(index, 1);
    this._readingBookList.next(this.readingListData);
  }


  /** GENRES LIST */
  private genresFromBookList(bookList: Array<Book>) {
    const genres = bookList.map(book => book.genre);
    this.genresListData = Array.from(new Set(genres)).sort();
    this.genresListData.unshift(this.genreAllOption);
    this._genresList.next(this.genresListData);
  }

  get genreList() {
    return this._genresList.asObservable();
  }

  newGenre(genre: string) {
    this.genreFilter = genre;
  }

}
