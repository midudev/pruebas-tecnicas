import { Component, Input, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '~/interfaces/books.interface';
import { BooksService } from '~/services/books.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input({ required: true }) book!: Book;
  private _booksService = inject(BooksService);
  private _router = inject(Router);
  private _ngZone = inject(NgZone);

  updateReadingList(event: Event) {
    event.stopPropagation();
    this._booksService.updateReadingList(this.book);
  }

  goToBookDetail() {
    if (!(document as any).startViewTransition) {
      this._router.navigateByUrl(`/detail/${this.book.ISBN}`);
      return;
    }

    (document as any).startViewTransition(() => {
      this._ngZone.run(() =>
        this._router.navigate(['/detail', this.book.ISBN])
      );
    });
  }
}
