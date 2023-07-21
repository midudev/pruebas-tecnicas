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

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.genreList.subscribe(genres => this.genres = genres);
  }

  genreChanged(target: any) {
    if (target.value !== "") {
      this.bookService.newGenre(target.value);
      this.bookService.filterBookListFromGenre(target.value);
    }
  }

}
