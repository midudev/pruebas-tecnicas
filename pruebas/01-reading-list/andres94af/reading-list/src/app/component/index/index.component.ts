import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
})
export class IndexComponent {
  books: any;

  constructor(private service: BookService) {
    this.getBooks();
  }

  getBooks() {
    this.service.getBooks().subscribe({
      next: (data: any) => (this.books = data),
      error: (err) => console.log(err),
    });
  }
}
