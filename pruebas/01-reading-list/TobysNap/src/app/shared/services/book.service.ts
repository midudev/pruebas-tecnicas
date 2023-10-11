import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { Book } from '../interfaces/Book';
import { Library } from '../interfaces/Library';
import { Subject } from 'rxjs';
import { ListService } from './list.service';
import { FormControl } from '@angular/forms';

export interface BooksState {
  books: Book[];
  filter: number | null;
  genreFilter: string | null;
  loaded: boolean;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl = 'assets/books.json';
  http = inject(HttpClient);
  listService = inject(ListService);
  filterControl = new FormControl();
  genreControl = new FormControl();

  // estado inicial
  private state = signal<BooksState>({
    books: [],
    filter: null,
    genreFilter: null,
    loaded: false,
    quantity: 0,
  });

  // selectores
  books = computed(() => this.state().books);
  loaded = computed(() => this.state().loaded);
  quantity = computed(() => this.state().quantity);
  genreFilter = computed(() => this.state().genreFilter);
  booksByGenre = computed(() => {
    const genreFilter = this.genreFilter();

    return genreFilter
      ? this.books().filter((book) =>
          book.genre.toLowerCase().includes(genreFilter.toLowerCase())
        )
      : this.books();
  });
  filter = computed(() => this.state().filter);
  filteredBooks = computed(() => {
    const filter = this.filter();

    return filter
      ? this.books().filter((book) => book.pages <= filter)
      : this.books();
  });

  // fuentes
  private booksLoaded$ = this.loadBooks();
  add$ = new Subject<Book>();
  remove$ = new Subject();
  filter$ = this.filterControl.valueChanges;
  genreFilter$ = this.genreControl.valueChanges;

  constructor() {
    // reducers
    this.booksLoaded$.pipe(takeUntilDestroyed()).subscribe((books) => {
      this.state.update((state) => ({
        ...state,
        books,
        loaded: true,
        quantity: books.length - this.listService.quantity(),
      }));
    });

    this.filter$.pipe(takeUntilDestroyed()).subscribe((filter) => {
      this.state.update((state) => ({
        ...state,
        filter: filter === 0 ? null : filter,
        quantity: this.filteredBooks().length,
      }));
    });

    this.genreFilter$.pipe(takeUntilDestroyed()).subscribe((genre) => {
      this.state.update((state) => ({
        ...state,
        genreFilter: genre === '' ? null : genre,
        quantity: this.booksByGenre().length,
      }));
    });

    this.add$.pipe(takeUntilDestroyed()).subscribe((book) => {
      this.state.update((state) => ({
        ...state,
        books: [...state.books, book],
        quantity: state.quantity + 1,
      }));
    });

    this.remove$.pipe(takeUntilDestroyed()).subscribe((title) => {
      this.state.update((state) => ({
        ...state,
        books: state.books.filter((book) => book.title !== title),
        quantity: state.quantity - 1,
      }));
    });
  }

  loadBooks() {
    return this.http
      .get<Library>(this.booksUrl)
      .pipe(map((data) => data.library.map((library) => library.book as Book)));
  }
}
