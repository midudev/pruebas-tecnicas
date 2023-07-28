import { ReadingBookListService } from './../../services/reading-book-list.service';
import { Component, OnInit, inject } from '@angular/core';
import { BookFavorite } from 'src/app/models/book.interface';


@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {

  private readingBookListService = inject(ReadingBookListService);

  readingBooks: BookFavorite[] = [];
  readingBooksInverted: BookFavorite[] = [];

  ngOnInit(): void {
    this.readingBookListService.$favoriteChanges().subscribe(newFavorites => {
      this.readingBooks = newFavorites;
      this.readingBooksInverted = this.readingBooks.slice().reverse();
    });
  }

  addBookFavorite(isbn: string) {
    this.readingBookListService.addBookFavorite(isbn);
  }

  removeBookFavorite(isbn: string) {
    this.readingBookListService.removeBookFavorite(isbn);
  }

}
