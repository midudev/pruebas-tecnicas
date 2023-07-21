import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { Book } from '../interfaces/Book';
import { Library } from '../interfaces/Library';
import { Subject } from 'rxjs';

export interface BooksState {
  books: Book[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl = 'assets/books.json';
  http = inject(HttpClient);

  private state = signal<BooksState>({
    books: [],
    loaded: false,
  });

  books = computed(() => this.state().books);
  loaded = computed(() => this.state().loaded);

  private booksLoaded$ = this.loadBooks();
  add$ = new Subject<Book>();
  remove$ = new Subject();

  constructor() {
    this.booksLoaded$.pipe(takeUntilDestroyed()).subscribe((books) => {
      this.state.update((state) => ({
        ...state,
        books,
        loaded: true,
      }));
    });

    this.add$.pipe(takeUntilDestroyed()).subscribe((book) => {
      this.state.update((state) => ({
        ...state,
        books: [...state.books, book]
      }))
    })

    this.remove$.pipe(takeUntilDestroyed()).subscribe((title) => {
      this.state.update((state) => ({
        ...state,
        books: state.books.filter((book) => book.title !== title),
      }));
    });
  }

  loadBooks() {
    return this.http
      .get<Library>(this.booksUrl)
      .pipe(map((data) => data.library.map((library) => library.book as Book)));
  }
}
