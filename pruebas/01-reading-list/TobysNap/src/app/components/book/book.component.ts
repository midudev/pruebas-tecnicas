import { Input, Component, inject } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/Book';
import { BookService } from 'src/app/shared/services/book.service';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-book',
  template: `
    <article *ngFor="let book of books" class="bg-primary">
      <header>
        <h1>{{book.title}}</h1>
        <button class="btn btn-accent" (click)="add(book)">Añadir</button>
      </header>
      <figure>
        <img [src]="book.cover" alt="">
      </figure>
    </article>
    `,
  styles: [
    `
      article {
        align-items: center;
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
        justify-content: space-around;
        text-wrap: balance;
        border-radius: 15px;
        padding: 0.5rem;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 1em;
      }

      figure {
        height: 80%;
      }

      img {
        height: 100%;
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
