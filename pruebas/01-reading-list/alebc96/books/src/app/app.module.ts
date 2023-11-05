import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadingBookComponent } from './components/reading-book/reading-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksFilterComponent } from './components/books-filter/books-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookCardComponent,
    ReadingBookComponent,
    BookDetailsComponent,
    BooksFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
