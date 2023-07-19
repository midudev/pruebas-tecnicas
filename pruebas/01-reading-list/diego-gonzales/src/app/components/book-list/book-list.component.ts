import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from '../book-item/book-item.component';
import { BooksService } from '~/services/books.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookItemComponent],
  templateUrl: './book-list.component.html',
})
export default class BookListComponent {
  private _booksService = inject(BooksService);
  bookList = this._booksService.filteredBooks;

  ngOnInit() {
    this._booksService.getBooks();
  }
}
