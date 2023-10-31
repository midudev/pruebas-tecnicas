import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'BookList',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit{
  @Input() books: Book[] = [];
  genres: string[] = [];
  genre: string = '';
  minPages = 0;
  pageRange!: {
    min: number,
    max: number
  };

  bookService = inject(BooksService);
  
  ngOnInit(): void {
    this.setPageRange();

    this.bookService.getGenres()
      .subscribe(genres => this.genres = genres);
  }

  drop(event: CdkDragDrop<Book[]>) {
    if(event.previousContainer !== event.container) {
      this.bookService.addOrRemoveBook(event.item.data);
    }
  }

  setPageRange() {
    const min = Math.min(... this.books.map(b => b.pages));
    const max = Math.max(... this.books.map(b => b.pages));
    this.pageRange = { min, max };
    this.minPages = min;
  }

}
