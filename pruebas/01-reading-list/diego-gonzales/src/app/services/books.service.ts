import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { STORAGE_KEY } from '~/consts';
import type { Book, BooksData } from '~/interfaces/books.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private _httpClient = inject(HttpClient);
  private _storageService = inject(StorageService);
  private _bookList = signal<Book[]>([]);
  private _readingList = signal<Book[]>([]);

  get bookList() {
    return this._bookList.asReadonly();
  }

  get readingList() {
    return this._readingList.asReadonly();
  }

  constructor() {
    this.validateStorage();
  }

  validateStorage() {
    const data = this._storageService.getFromStorage(STORAGE_KEY);

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

    this.saveDataInStorage();
  }

  saveDataInStorage() {
    this._storageService.saveInStorage(STORAGE_KEY, {
      bookList: this._bookList(),
      readingList: this._readingList(),
    });
  }
}
