import { Component } from '@angular/core';
import { Book, BookFavorite } from 'src/app/models/book.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  books: BookFavorite[] = []
}
