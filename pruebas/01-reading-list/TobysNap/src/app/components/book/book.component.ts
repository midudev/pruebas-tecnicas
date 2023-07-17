import { Input, Component } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/Book';

@Component({
  selector: 'app-book',
  template: `
    <article [ngStyle]="style">
      <h1>Libro: {{book.title}}</h1>
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
  @Input() book!: Book;
  style = {
    'background': '#f00',
  }
}
