import { Component, computed, inject } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books',
  template: `
    <h2>Libros disponibles {{bookService.quantity()}}</h2>
    <app-filter [control]="bookService.filterControl" [genreFilter]="bookService.genreControl"></app-filter>
    <app-book [books]="bookService.booksByGenre()"></app-book>
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
}
