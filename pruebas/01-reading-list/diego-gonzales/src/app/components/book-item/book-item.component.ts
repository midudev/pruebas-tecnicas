import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '~/interfaces/books.interface';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
})
export class BookItemComponent {
  @Input({ required: true }) book!: Book;
}
