import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model';
import { BookService } from 'src/app/books/books.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

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
