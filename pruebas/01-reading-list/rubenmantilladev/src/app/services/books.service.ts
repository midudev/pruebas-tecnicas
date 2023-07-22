import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private jsonFileURL = 'assets/json/books.json';

  private http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return this.http.get<{ library: Book[] }>('assets/books.json').pipe(
      map(data => data.library)
    );
  }

}
