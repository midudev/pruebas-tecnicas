import { Input, Component, inject } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/Book';
import { BookService } from 'src/app/shared/services/book.service';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-book',
  template: `
    <article *ngFor="let book of books">
      <h1>Libro: {{book.title}}</h1>
      <button (click)="add(book)">Añadir</button>
    </article>
  `,
  styles: [
    `
      article {
        width: 100%;
      }
    `
  ]
  
})
export class BookComponent {
  bookService = inject(BookService);
  listService = inject(ListService);
  @Input() books!: Book[];

  add(book: Book) {
    this.listService.add$.next(book);
    this.bookService.remove$.next(book.title);
  }
}
