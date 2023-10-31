import { Component, HostListener, OnInit, inject } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bookService = inject(BooksService);
  ngOnInit(): void {
    this.bookService.getBooks();
    this.bookService.updateBookListToReadNumber();
  }

}
