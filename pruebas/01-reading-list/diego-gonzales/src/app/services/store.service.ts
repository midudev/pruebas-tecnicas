import { Injectable, computed, inject, signal } from '@angular/core';
import { GENRES, type Genre } from '~/consts';
import type { Filters } from '~/interfaces/filters.interface';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _booksService = inject(BooksService);
  private _bookList = this._booksService.bookList;
  private _readingList = this._booksService.readingList;

  private _showSearchBox = signal<boolean>(false);
  private _filters = signal<Filters>({
    search: '',
    genre: GENRES.ALL,
    pages: 1500,
  });

  totalBooksAvailable = computed(
    () => this._bookList().length - this._readingList().length
  );
  totalBooksInReadingList = computed(() => this._readingList().length);
  filteredBooks = computed(() => this._filterBooks());

  get showSearchBox() {
    return this._showSearchBox.asReadonly();
  }

  get filters() {
    return this._filters.asReadonly();
  }

  private _filterBooks() {
    const { search, genre, pages } = this._filters();

    return this._bookList().filter((book) =>
      genre !== GENRES.ALL
        ? book.genre === genre &&
          book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
          book.pages <= pages
        : book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
          book.pages <= pages
    );
  }

  toggleShowSearchBox() {
    this._showSearchBox.update((value) => !value);
  }

  updateSearchFilter(searchValue: string) {
    this._filters.mutate((value) => {
      value.search = searchValue;
    });
  }

  updateGenreFilter(genreValue: Genre) {
    this._filters.mutate((value) => {
      value.genre = genreValue;
    });
  }

  updatePagesFilter(pagesValue: number) {
    this._filters.mutate((value) => {
      value.pages = pagesValue;
    });
  }
}
