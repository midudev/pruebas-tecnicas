import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { ReadBookListComponent } from './read-book-list/read-book-list.component';
import { BooksComponent } from './books.component';
import { FilterBooksListComponent } from './filter-books-list/filter-books-list.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    ReadBookListComponent,
    FilterBooksListComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
