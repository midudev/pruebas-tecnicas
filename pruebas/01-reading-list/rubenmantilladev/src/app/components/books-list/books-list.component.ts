import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from 'src/app/services/books.service'
import { BookFavorite } from 'src/app/models/book.interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: BookFavorite[] = [];

  private booksService = inject(BooksService)

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      }
    })
  }

}
