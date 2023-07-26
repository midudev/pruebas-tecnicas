import { Component, inject } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'BookToRead',
  templateUrl: './books-to-read.component.html',
})
export class BookToReadComponent {
  books: Book[] = [];
  
  ngOnInit(): void {
    this.bookService.getBookList()
      .subscribe(books => this.books = books.filter (b => b.inListToRead));
  }
  bookService = inject(BooksService);

  drop(event: any) {
    if(event.previousContainer !== event.container) {
      this.bookService.addOrRemoveBook(event.item.data);
    }
  }
}
