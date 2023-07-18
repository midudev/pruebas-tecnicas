import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from 'src/app/models/data-from-api.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() public book!: Book;
  @Input() public listType!: string;

  booksService = inject(BooksService);

  addToReadingList(book: Book) {
    this.booksService.addToReadingList(book);
  }

  addToAvailableList(book: Book) {
    this.booksService.addToAvailableList(book);
  }
}
