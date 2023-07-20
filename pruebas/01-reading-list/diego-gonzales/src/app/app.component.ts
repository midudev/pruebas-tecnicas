import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BooksService } from './services/books.service';
import { STORAGE_KEY } from './consts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _booksService = inject(BooksService);
  showSearchBox = this._booksService.showSearchBox;

  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key !== STORAGE_KEY) return;

    this._booksService.validateStorage();
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();

    this._booksService.filters.mutate((filters) => {
      filters.search = value;
    });
  }
}
