import { Component, computed, inject } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/Book';
import { BookService } from 'src/app/shared/services/book.service';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-reading-list',
  template: `
    <h2>Mi lista de lectura</h2>
    <p>Libros en mi lista: {{quantity()}}</p>
    <div *ngFor="let book of list()">
      <h1>{{ book.title }}</h1>
      <button (click)="remove(book)">Quitar</button>
    </div>
  `,
  styles: [
    `
      
    `
  ]
})
export class ReadingListComponent {
  bookService = inject(BookService);
  listService = inject(ListService);
  list = computed(() => this.listService.list());
  quantity = computed(() => this.listService.quantity());

  remove(item: Book) {
    this.listService.remove$.next(item);
    this.bookService.add$.next(item);
  }

}
