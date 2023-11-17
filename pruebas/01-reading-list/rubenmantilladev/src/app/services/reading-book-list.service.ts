import { BooksService } from 'src/app/services/books.service';
import { BookFavorite } from 'src/app/models/book.interface';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadingBookListService {
  private BooksService = inject(BooksService);
  booksListSimple: BookFavorite[] = [];
  bookListFavotite: BookFavorite[] = [];

  private $favoriteSubject = new BehaviorSubject<BookFavorite[]>([]);

  constructor() {
    const booksFavorite = this.getLocalStorage();
    if (booksFavorite) {
      this.bookListFavotite = booksFavorite;
    }
    this.BooksService.getBooks().subscribe({
      next: data => {
        this.booksListSimple = data;
      },
    });
  }

  addBookFavorite(isbn: string) {
    const book = this.booksListSimple.find(book => book.ISBN === isbn);
    const bookFavorite = this.bookListFavotite.find(
      book => book.ISBN === isbn
    )
    try {
      if (bookFavorite) {
        throw new Error('Book already in favorite list');
      }
      if (!book) {
        throw new Error('Book not found');
      }
      book.favorite = true;
      this.bookListFavotite.push(book);
      this.setLocalStorage(this.bookListFavotite);
      this.$favoriteSubject.next(this.bookListFavotite.slice());
    } catch (error) {
      console.log(error);
    }
  }

  removeBookFavorite(isbn: string) {
    const book = this.booksListSimple.find(book => book.ISBN === isbn);
    try {
      if (!book) {
        throw new Error('Book not found');
      }
      book.favorite = false;
      this.bookListFavotite = this.bookListFavotite.filter(
        book => book.ISBN !== isbn
      );
      this.setLocalStorage(this.bookListFavotite);
      this.$favoriteSubject.next(this.bookListFavotite.slice());
    } catch (error) {
      console.error(error);
    }
  }

  $favoriteChanges(): Observable<BookFavorite[]> {
    return this.$favoriteSubject.asObservable();
  }

  setLocalStorage(booksFavorite: BookFavorite[]) {
    localStorage.setItem('favoriteBooks', JSON.stringify(booksFavorite));
  }

  getLocalStorage(): BookFavorite[] {
    const booksFavorite = localStorage.getItem('favoriteBooks');
    if (booksFavorite) {
      const parsedBooksFavorite: BookFavorite[] = JSON.parse(booksFavorite);
      this.$favoriteSubject.next(parsedBooksFavorite.slice());
      return parsedBooksFavorite;
    }
    return [];
  }

}
