import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { GENRES, KEY_STORAGE } from '~/consts';
import type { Book, BooksData } from '~/interfaces/books.interface';
import type { Filters } from '~/interfaces/filters.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private _httpClient = inject(HttpClient);
  private _storageService = inject(StorageService);
  private _bookList = signal<Book[]>([]);
  private _readingList = signal<Book[]>([]);

  showSearchBox = signal<boolean>(false);
  filters = signal<Filters>({
    search: '',
    genre: GENRES.ALL,
    pages: 1500,
  });

  totalBooksAvailable = computed(
    () => this._bookList().length - this._readingList().length
  );
  totalBooksInReadingList = computed(() => this._readingList().length);
  filteredBooks = computed(() => this.filterBooks());

  get readingList() {
    return this._readingList.asReadonly();
  }

  constructor() {
    this.validateStorage();
  }

  validateStorage() {
    const data = this._storageService.getFromStorage(KEY_STORAGE);

    if (data == null) {
      this.getBooks();
      return;
    }

    this._bookList.set(data.bookList);
    this._readingList.set(data.readingList);
  }

  getBooks() {
    this._httpClient
      .get<BooksData>('assets/data.json')
      .pipe(map((resp) => resp.library.map((item) => item.book)))
      .subscribe((resp) => this._bookList.set(resp));
  }

  getBook(ISBN: string) {
    return this._httpClient.get<BooksData>('assets/data.json').pipe(
      map((resp) => resp.library.map((item) => item.book)),
      map((resp) => resp.find((book) => book.ISBN === ISBN) ?? null)
    );
  }

  updateReadingList(book: Book) {
    this._bookList.mutate((value) => {
      const bookIndex = value.findIndex((b) => b.ISBN === book.ISBN);
      const favoriteValue = book.isFavorite ?? false;

      value[bookIndex].isFavorite = !favoriteValue;
    });

    this._readingList.mutate((value) => {
      const bookIndex = value.findIndex((b) => b.ISBN === book.ISBN);
      bookIndex === -1 ? value.unshift(book) : value.splice(bookIndex, 1);
    });

    this._storageService.saveInStorage(KEY_STORAGE, {
      bookList: this._bookList(),
      readingList: this._readingList(),
    });
  }

  filterBooks() {
    const { search, genre, pages } = this.filters();

    return this._bookList().filter((book) =>
      genre !== GENRES.ALL
        ? book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
          book.genre === genre &&
          book.pages <= pages
        : book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
          book.pages <= pages
    );
  }
}
