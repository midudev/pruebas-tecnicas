import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from 'src/app/services/books.service'
import { Book } from 'src/app/models/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  private booksService = inject(BooksService)

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: (data) => {
        const objectBooks: any[] = data;
        this.books = objectBooks.map(item => item.book)
      }
    });
  }
}
