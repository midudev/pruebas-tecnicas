import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import type { Book, BooksData } from '~/interfaces/books.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private _httpClient = inject(HttpClient);
  private _bookList = signal<Book[]>([]);
  private _readingList = signal<Book[]>([]);

  get bookList() {
    return this._bookList.asReadonly();
  }

  get readingList() {
    return this._readingList.asReadonly();
  }

  getBooks() {
    this._httpClient
      .get<BooksData>('assets/data.json')
      .pipe(map((resp) => resp.library.map((item) => item.book)))
      .subscribe((resp) => this._bookList.set(resp));
  }
}
