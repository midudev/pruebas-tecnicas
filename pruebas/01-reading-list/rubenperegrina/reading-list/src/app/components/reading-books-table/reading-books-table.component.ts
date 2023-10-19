import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgPlural, NgPluralCase } from '@angular/common';
import { Library } from 'src/app/models/data-from-api.interface';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'book-reading-books-table',
  standalone: true,
  imports: [NgIf, NgFor, NgPlural, NgPluralCase, BookCardComponent],
  templateUrl: './reading-books-table.component.html',
  styleUrls: ['./reading-books-table.component.scss'],
})
export class ReadingBooksTableComponent {
  @Input() public readingListBooks: Library[] = [];

  trackByItems(index: number) {
    return index;
  }
}
