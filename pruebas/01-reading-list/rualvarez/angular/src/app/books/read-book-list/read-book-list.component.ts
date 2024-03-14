import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model';
import { BookService } from '../books.service';

@Component({
  selector: 'read-book-list',
  templateUrl: './read-book-list.component.html',
  styleUrls: ['./read-book-list.component.scss']
})
export class ReadBookListComponent implements OnInit {

  books: Array<Book> = [];

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookService.readingList.subscribe(books => {
      this.books = books;
    })
  }

  moveToList(book: Book) {
    this.bookService.moveFromReadingListToList(book);
  }

}
