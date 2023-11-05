import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  @Input() books: Book[] = [];
  @Input() readingList: Book[] = [];

  constructor(private bookService:BookService) {}

  addReadingList(book: Book, index: number) {
    this.books.splice(index, 1);
    this.readingList.unshift(book);
    this.bookService.saveToLocalstorage(this.books, this.readingList);
  }
}
