import { Input, Component, inject } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/Book';
import { BookService } from 'src/app/shared/services/book.service';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-book',
  template: `
    <article [ngStyle]="style">
      <h1>Libro: {{book.title}}</h1>
      <button (click)="add()">Añadir</button>
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
  @Input() book!: Book;
  style = {
    'background': '#f00',
  }

  add() {
    this.listService.add$.next(this.book);
    this.bookService.remove$.next(this.book.title)
  }
}
