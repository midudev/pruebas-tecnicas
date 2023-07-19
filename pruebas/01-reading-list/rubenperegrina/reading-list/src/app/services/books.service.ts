/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, inject } from '@angular/core';
import { Book, DataFromAPI, Library } from '../models/data-from-api.interface';
import { HttpClient } from '@angular/common/http';
import { tap, BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readingListBooks: Library[] = [];
  private _readingListBooks: BehaviorSubject<Library[]>;
  private availableBooks: Library[] = [];
  private _availableBooks: BehaviorSubject<Library[]>;

  http = inject(HttpClient);

  constructor() {
    this._readingListBooks = new BehaviorSubject<Library[]>([]);
    this._availableBooks = new BehaviorSubject<Library[]>([]);
    this.loadFromLocalStorage();
  }

  getReading(): any {
    return of(this._readingListBooks);
  }

  getAvailable(): any {
    return of(this._availableBooks);
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
    if (!localStorage.getItem('available-books')) {
      this.getAvailableBooks();
      return;
    }

    this._availableBooks = JSON.parse(localStorage.getItem('available-books')!);
    this._readingListBooks = JSON.parse(
      localStorage.getItem('reading-list-books')!
    );
  }

  getAvailableBooks(): void {
    this.http
      .get<DataFromAPI>('../../assets/data/books.json')
      .pipe(
        tap(data => (this.availableBooks = data.library)),
        tap(() => this._availableBooks.next(this.availableBooks)),
        tap(() => this.saveToLocalStorage())
      )
      .subscribe();
  }

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
