import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model';
import { BookService } from '../books.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: Array<Book> = [];

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.bookList.subscribe(books => {
      this.bookList = books;
    })
  }

  moveToRead(book: Book, index: number) {
    this.bookService.moveFromListToReadingList(book, index);
  }

}
