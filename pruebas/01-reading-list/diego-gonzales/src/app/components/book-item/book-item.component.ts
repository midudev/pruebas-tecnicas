import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '~/interfaces/books.interface';
import { BooksService } from '~/services/books.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input({ required: true }) book!: Book;
  private _booksService = inject(BooksService);

  updateReadingList(event: Event) {
    event.stopPropagation();
    this._booksService.updateReadingList(this.book);
  }
}
