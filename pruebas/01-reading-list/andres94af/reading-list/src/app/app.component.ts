import { Component } from '@angular/core';
import { Book } from './model/book.model';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Reading List';
  books:Book[] = [];
  readingList:Book[] = [];

  constructor(private bookService:BookService){
      this.bookService.getBooks().subscribe({
        next: data => {
          this.books = data.library.map((item: { book: Book }) => item.book);
          console.log(this.books.length);
        },
        error: err => console.log(err)
      });
  }

  reciveReadingListBook(book:Book){
    this.readingList.push(book);
  }

  addBook(book:Book){
    this.books.push(book);
  }
}
