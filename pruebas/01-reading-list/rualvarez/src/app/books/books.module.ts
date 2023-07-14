import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksFilterComponent } from './books-filter/books-filter.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListReadComponent } from './books-list-read/books-list-read.component';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    BooksComponent,
    BooksFilterComponent,
    BooksListComponent,
    BooksListReadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
