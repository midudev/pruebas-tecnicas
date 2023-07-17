import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '~/interfaces/books.interface';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input({ required: true }) book!: Book;
  isFavorite = signal(false);

  toggleFavorite() {
    this.isFavorite.update((value) => !value);
    console.log(this.isFavorite());
  }
}
