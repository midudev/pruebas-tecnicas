import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookFavorite, LibraryBooks } from '../models/book.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private jsonFileURL = 'assets/json/books.json';

  private http = inject(HttpClient);

  books: BookFavorite[] = [];

  getBooks(): Observable<BookFavorite[]> {
    const booksSimple = this.http.get<LibraryBooks>(this.jsonFileURL).pipe(
      map(data => {
        const addPropFavorite = data.library.map(book => {
          const books = book.book
          return {
            ...books,
            favorite: false,
          }
        })
        return addPropFavorite;

      })
    );
    return booksSimple;
  }


}
