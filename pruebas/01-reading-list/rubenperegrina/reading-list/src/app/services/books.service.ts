/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, inject } from '@angular/core';
import { Book, DataFromAPI, Library } from '../models/data-from-api.interface';
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readingListBooks: Library[] = [];
  private _readingListBooks: BehaviorSubject<Library[]> = new BehaviorSubject<
    Library[]
  >([]);
  private availableBooks: Library[] = [];
  private _availableBooks: BehaviorSubject<Library[]> = new BehaviorSubject<
    Library[]
  >([]);

  http = inject(HttpClient);

  constructor() {
    this.loadFromLocalStorage();
  }

  getReading(): Observable<Library[]> {
    return this._readingListBooks.asObservable();
  }

  getAvailable(): Observable<Library[]> {
    return this._availableBooks.asObservable();
  }

  private saveToLocalStorage() {
    localStorage.setItem(
      'available-books',
      JSON.stringify(this._availableBooks.value)
    );
    localStorage.setItem(
      'reading-list-books',
      JSON.stringify(this._readingListBooks.value)
    );
  }

  private loadFromLocalStorage() {
    const _availableBooks = localStorage.getItem('available-books');
    if (_availableBooks) {
      this.availableBooks = JSON.parse(_availableBooks);
    } else {
      this.http
        .get<DataFromAPI>('../../assets/data/books.json')
        .pipe(
          tap(data => (this.availableBooks = data.library)),
          tap(() =>
            localStorage.setItem(
              'available-books',
              JSON.stringify(this.availableBooks)
            )
          ),
          tap(() => this._availableBooks.next(this.availableBooks))
        )
        .subscribe();
    }

    this._availableBooks.next(this.availableBooks);

    const _readingListBooks = localStorage.getItem('reading-list-books');
    if (_readingListBooks) {
      this.readingListBooks = JSON.parse(_readingListBooks);
    }

    this._readingListBooks.next(this.readingListBooks);
  }

  // getAvailableBooks(): void {
  //   this.http
  //     .get<DataFromAPI>('../../assets/data/books.json')
  //     .pipe(
  //       tap(data => (this.availableBooks = data.library)),
  //       tap(() => this._availableBooks.next(this.availableBooks)),
  //       tap(() => this.saveToLocalStorage())
  //     )
  //     .subscribe();
  // }

  addToReadingList(book: Book) {
    this.readingListBooks.push({ book });
    this._readingListBooks.next(this.readingListBooks);
    this.availableBooks = this.availableBooks.filter(
      b => b.book.ISBN !== book.ISBN
    );
    this._availableBooks.next(this.availableBooks);
    this.saveToLocalStorage();
  }

  addToAvailableList(book: Book) {
    this.availableBooks.push({ book });
    this._availableBooks.next(this.availableBooks);
    this.readingListBooks = this.readingListBooks.filter(
      b => b.book.ISBN !== book.ISBN
    );
    this._readingListBooks.next(this.readingListBooks);
    this.saveToLocalStorage();
  }
}
