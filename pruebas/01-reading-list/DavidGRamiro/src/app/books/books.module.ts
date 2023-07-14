import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
