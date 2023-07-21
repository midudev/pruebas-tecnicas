import { Component, OnInit } from '@angular/core';
import { BookService } from '../books.service';

@Component({
  selector: 'filter-books-list',
  templateUrl: './filter-books-list.component.html',
  styleUrls: ['./filter-books-list.component.scss']
})
export class FilterBooksListComponent implements OnInit {

  genres: Array<string> = [];
  selectedGenre: string = ""
  numberOfAvailableBooks: number | undefined;

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.genreList.subscribe(genres => this.genres = genres);
    this.bookService.bookList.subscribe(books => this.numberOfAvailableBooks = books.length);
  }

  genreChanged(target: any) {
    if (target.value !== "") {
      this.bookService.newGenre(target.value);
      this.bookService.filterBookListFromGenre(target.value);
    }
  }

}
