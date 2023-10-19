import { Component, Input } from '@angular/core';
import { Library } from 'src/app/models/data-from-api.interface';
import { NgFor, NgIf, NgPlural, NgPluralCase } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'book-available-books-table',
  standalone: true,
  imports: [NgIf, NgFor, NgPlural, NgPluralCase, BookCardComponent],
  templateUrl: './available-books-table.component.html',
  styleUrls: ['./available-books-table.component.scss'],
})
export class AvailableBooksTableComponent {
  @Input() public availableBooks: Library[] = [];

  trackByItems(index: number) {
    return index;
  }
}
