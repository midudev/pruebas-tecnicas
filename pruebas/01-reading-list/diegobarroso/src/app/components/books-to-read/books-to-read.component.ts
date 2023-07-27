import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, inject } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'BookToRead',
  templateUrl: './books-to-read.component.html',
})
export class BookToReadComponent {
  @Input() books: Book[] = [];
  bookService = inject(BooksService);

  drop(event: CdkDragDrop<Book[]>) {
    if(event.previousContainer !== event.container) {
      this.bookService.addOrRemoveBook(event.item.data);
    }
  }
}
