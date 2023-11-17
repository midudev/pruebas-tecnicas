import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookFavorite, LibraryBooks } from '../models/book.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private searchResultsSubject = new BehaviorSubject<BookFavorite[]>([]);
  public searchResults$: Observable<BookFavorite[]> = this.searchResultsSubject.asObservable();

  private http = inject(HttpClient);

  private jsonFileURL = 'assets/json/books.json';

  getBooks(): Observable<BookFavorite[]> {
    const booksSimple = this.http.get<LibraryBooks>(this.jsonFileURL).pipe(
      map(data => {
        const addPropFavorite = data.library.map(book => {
          const books = book.book;
          return {
            ...books,
            favorite: false,
          };
        });
        return addPropFavorite;
      })
    );
    return booksSimple;
  }

  searchBooks(query: string, booksList: BookFavorite[]): void {
    query = query.trim();
    const filteredBooks = booksList.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
      const isbnMatch = book.ISBN.toLowerCase().includes(query.toLowerCase());
      const authorMatch = book.author.name.toLowerCase().includes(query.toLowerCase());
      const genreMatch = book.genre.toLowerCase().includes(query.toLowerCase());

      return titleMatch || isbnMatch || authorMatch || genreMatch;
    });
    this.searchResultsSubject.next(filteredBooks);
  }


}
