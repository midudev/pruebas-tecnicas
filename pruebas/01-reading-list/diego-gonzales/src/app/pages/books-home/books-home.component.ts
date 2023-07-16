import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import BookListComponent from '~/components/book-list/book-list.component';
import { BookFiltersComponent } from '~/components/book-filters/book-filters.component';

@Component({
  selector: 'app-books-home',
  standalone: true,
  imports: [CommonModule, BookListComponent, BookFiltersComponent],
  templateUrl: './books-home.component.html',
})
export default class BooksHomeComponent {}
