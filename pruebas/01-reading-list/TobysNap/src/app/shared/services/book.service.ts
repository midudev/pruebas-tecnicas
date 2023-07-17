import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { Book } from '../interfaces/Book';
import { Library } from '../interfaces/Library';

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

  // Estado
  private state = signal<BooksState>({
    books: [],
    loaded: false,
  });

  // Selectores
  books = computed(() => this.state().books);
  loaded = computed(() => this.state().loaded);

  // Fuentes
  private booksLoaded$ = this.loadBooks();

  constructor() {
    this.booksLoaded$.pipe(takeUntilDestroyed()).subscribe((books) => {
      this.state.update((state) => ({
        ...state,
        books,
        loaded: true,
      }));
    });
  }

  loadBooks() {
    return this.http
      .get<Library>(this.booksUrl)
      .pipe(map((data) => data.library.map((library) => library.book as Book)));
  }
}
