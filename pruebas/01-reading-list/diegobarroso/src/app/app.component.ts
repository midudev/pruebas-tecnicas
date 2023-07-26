import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Book } from './interfaces/book';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  bookService = inject(BooksService);

  @HostListener('window:storage', ['$event'])
  handleStorageChange(event: StorageEvent) {
    const booksFromLocastorage = JSON.parse(localStorage.getItem('books')!);
      console.log('booksFromLocastorage', booksFromLocastorage);
      this.bookService.updateBooks(booksFromLocastorage);
      this.bookService.updateBookListToReadNumber();
  }
  
  books: Book[] = [];

  ngOnInit(): void {
    console.log('ngOnInit')
      this.bookService.getBooks()
      .subscribe(books => this.books = books);
    }

}
