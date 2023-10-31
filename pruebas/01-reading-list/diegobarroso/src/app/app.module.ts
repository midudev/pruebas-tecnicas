import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookToReadComponent } from './components/books-to-read/books-to-read.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './pages/books/books.component';
import { FilterByGenrePipe } from './pipes/filter-by-genre.pipe';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookListComponent,
    BookToReadComponent,
    BookComponent,
    BooksComponent,
    FilterByGenrePipe,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
