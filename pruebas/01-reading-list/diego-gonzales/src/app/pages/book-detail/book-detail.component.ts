import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '~/services/books.service';
import type { Book } from '~/interfaces/books.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
})
export default class BookDetailComponent {
  @Input('id') bookISBN?: string;
  private _booksService = inject(BooksService);
  private _router = inject(Router);
  book = signal<Book | null>(null);

  ngOnInit() {
    this.getBookInfo();
  }

  getBookInfo() {
    if (this.bookISBN == null) return;

    this._booksService.getBook(this.bookISBN).subscribe((resp) => {
      if (resp == null) {
        this._router.navigateByUrl('/');
        return;
      }

      this.book.set(resp);
    });
  }
}
