import { Component, computed, inject } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books',
  template: `
    <div>
      <app-book *ngFor="let book of books()" [book]="book"></app-book>
    </div>
  `,
  styles: [
    `
      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
      }
    `
  ],
})
export class BooksComponent{
  bookService = inject(BookService);
  books = computed(() => this.bookService.books());
}
