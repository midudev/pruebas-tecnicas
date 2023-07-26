import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'Book',
  templateUrl: './book.component.html',
})
export class BookComponent {
  @Input() book!: Book;
  bookService = inject(BooksService);

  addOrRemoveBook(book: Book) {
    this.bookService.addOrRemoveBook(book)
  }
}
