import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '~/services/books.service';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-reading-list',
  standalone: true,
  imports: [CommonModule, BookItemComponent],
  templateUrl: './reading-list.component.html',
})
export class ReadingListComponent {
  private _booksService = inject(BooksService);
  readingList = this._booksService.readingList;
}
