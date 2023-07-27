import { ReadingBookListService } from './../../services/reading-book-list.service';
import { Component, Input, OnInit, inject } from '@angular/core';
import { BookFavorite } from 'src/app/models/book.interface';

@Component({
  selector: 'app-one-book',
  templateUrl: './one-book.component.html',
  styleUrls: ['./one-book.component.css']
})
export class OneBookComponent implements OnInit {
  @Input() books: BookFavorite[] = [];
  booksFavorite: BookFavorite[] = [];

  private readingBookListService = inject(ReadingBookListService);

  ngOnInit(): void {
    this.readingBookListService.$favoriteChanges().subscribe(newFavorites => {
      this.booksFavorite = newFavorites;
    });
  }

  addFavorite(isbn: string) {
    if (this.showBookFavorite(isbn)) {
      this.readingBookListService.removeBookFavorite(isbn);
      return;
    }
    this.readingBookListService.addBookFavorite(isbn);
  }

  showBookFavorite(isbn: string): boolean {
    const book = this.booksFavorite.find(book => book.ISBN === isbn);
    if (book) {
      return book.favorite
    } else {
      return false;
    }
  }
}
