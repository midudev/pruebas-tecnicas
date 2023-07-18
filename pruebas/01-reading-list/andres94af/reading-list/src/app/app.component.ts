import { Component } from '@angular/core';
import { Book } from './model/book.model';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MIDU Challenge - Reading List';

  books:Book[] = [];
  readingList:Book[] = [];
  genres:string[] = [];
  maxPage:number = 0;

  pageFiltered:number = 0;
  genre: string = '';
  isFiltered:boolean = false;

  constructor(private bookService:BookService){
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe({
      next: data => {
        this.books = data.library.map((item: { book: Book }) => item.book);
        this.getGenreList(this.books);
        this.maxPage = this.getMaxNumberPages(this.books);
      },
      error: err => console.log(err)
    });
  }

  reciveReadingListBook(book:Book){
    this.readingList.push(book);
  }

  addBook(book:Book){
    this.books.push(book);
  }
  
  getGenreList(books:Book[]){
    books.forEach(book => {
      if (!this.genres.includes(book.genre)) this.genres.push(book.genre);
    });
   }
   
  filterByGenre(){
    if (this.genre != '') {
      this.books = this.books.filter(book => book.genre === this.genre);
      this.isFiltered = true;
    }
  }

  clearFilter(){
    this.bookService.getBooks().subscribe({
      next: data => {
        this.books = data.library.map((item: { book: Book }) => item.book);
        this.isFiltered = false;
        this.genre = '';
        this.books = this.books.filter(book1 => !this.readingList.some(book2 => book1.title === book2.title));
        this.getGenreList(this.books);
      },
      error: err => console.log(err)
    });
  }

  getMaxNumberPages(books:Book[]){
    var maxPages = 0;
    books.forEach(book => {
      if (book.pages > maxPages) {
        maxPages = book.pages;
      }
    })
    return maxPages;
  }

  filterByPages(){
    this.books = this.books.filter(book => book.pages >= this.pageFiltered);
    this.pageFiltered = 0;
    this.isFiltered = true;
  }

}
