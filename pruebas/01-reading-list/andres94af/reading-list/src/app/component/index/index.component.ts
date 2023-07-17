import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {

  @Input() readingList:Book[] = [];
  @Input() books: Book[] = [];

  constructor() {}

  addReadingList(book:Book, index:number){
    this.books.splice(index, 1);
    this.readingList.push(book);
  }

}
