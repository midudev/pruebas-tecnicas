import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  bookList: Book[] = [];
  booksToRead: Book[] = [];
  bookService = inject(BooksService);

  @HostListener('window:storage', ['$event'])
  handleStorageChange(event: StorageEvent) {
    const booksFromLocastorage = JSON.parse(localStorage.getItem('books')!);
      this.bookService.updateBooks(booksFromLocastorage);
      this.bookService.updateBookListToReadNumber();
  }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe(books => {
      this.books = books;
      this.filterBooks();
    });

    this.bookService.getBookList()
    .subscribe(() => {
      this.books = JSON.parse(localStorage.getItem('books')!);
      this.filterBooks();
    });
  }

  filterBooks() {
    this.bookList = this.books.filter (b => !b.inListToRead);
    this.booksToRead = this.books.filter (b => b.inListToRead);
  }
}


