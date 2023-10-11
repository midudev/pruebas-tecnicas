import { Component, computed, inject } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books',
  template: `
    <h2>Libros disponibles {{ bookService.quantity() }}</h2>
    <app-filter
      [control]="bookService.filterControl"
      [genreFilter]="bookService.genreControl"
    ></app-filter>
    <main>
      <app-book [books]="bookService.booksByGenre()"></app-book>
    </main>
  `,
  styles: [
    `
      app-book {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-template-rows: repeat(4, min-content);
        gap: 0.5rem;
        padding-block: 1rem;
      }
    `,
  ],
})
export class BooksComponent {
  bookService = inject(BookService);
}
