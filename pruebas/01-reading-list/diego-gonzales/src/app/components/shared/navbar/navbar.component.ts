import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '~/services/books.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private _booksService = inject(BooksService);
  showSearchBox = this._booksService.showSearchBox;

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();

    this._booksService.filters.mutate((filters) => {
      filters.search = value;
    });
  }
}
