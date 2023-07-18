/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, inject } from '@angular/core';
import { Book, DataFromAPI, Library } from '../models/data-from-api.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  availableBooks: Library[] = [];
  readingListBooks: Library[] = [];

  http = inject(HttpClient);
  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(
      'available-books',
      JSON.stringify(this.availableBooks)
    );
    localStorage.setItem(
      'reading-list-books',
      JSON.stringify(this.readingListBooks)
    );
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('available-books')) {
      this.getAvailableBooks();
      return;
    }

    this.availableBooks = JSON.parse(localStorage.getItem('available-books')!);
  }

  getAvailableBooks(): void {
    this.http
      .get<DataFromAPI>('../../assets/data/books.json')
      .pipe(
        tap(data => (this.availableBooks = data.library)),
        tap(data => console.log(data)),
        tap(() => this.saveToLocalStorage())
      )
      .subscribe();
  }

  addToReadingList(book: Book) {
    this.readingListBooks.push({ book });
    this.availableBooks = this.availableBooks.filter(
      b => b.book.ISBN !== book.ISBN
    );

    this.saveToLocalStorage();
  }

  addToAvailableList(book: Book) {
    this.availableBooks.push({ book });
    this.readingListBooks = this.readingListBooks.filter(
      b => b.book.ISBN !== book.ISBN
    );
    this.saveToLocalStorage();
  }
}
