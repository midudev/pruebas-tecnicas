import { Component, OnInit } from '@angular/core';
import { BookService } from '../books.service';
import { Book } from '../books.model';

@Component({
  selector: 'books-list-read',
  templateUrl: './books-list-read.component.html',
  styleUrls: ['./books-list-read.component.scss']
})
export class BooksListReadComponent implements OnInit {

  books: Array<Book> = [];

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookService.readingList.subscribe(books => {
      this.books = books;
    })
  }

  moveToList(book: Book, index: number) {
    this.bookService.moveFromReadingListToList(book, index);
  }

}
