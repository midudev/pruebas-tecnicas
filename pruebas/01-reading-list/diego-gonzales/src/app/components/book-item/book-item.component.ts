import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '~/interfaces/books.interface';
import { BooksService } from '~/services/books.service';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input({ required: true }) book!: Book;
  private _booksService = inject(BooksService);
  isFavorite = signal(false);

  toggleFavorite() {
    this.isFavorite.update((value) => !value);
    this._booksService.updateReadingList(this.book, this.isFavorite());
  }
}
