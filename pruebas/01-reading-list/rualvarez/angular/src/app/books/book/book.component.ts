import { Component, Input } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book | undefined;

}
