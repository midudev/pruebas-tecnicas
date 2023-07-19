import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GENRES, type Genre } from '~/consts';
import { BooksService } from '~/services/books.service';

@Component({
  selector: 'app-book-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-filters.component.html',
})
export class BookFiltersComponent {
  private _bookService = inject(BooksService);
  filters = this._bookService.filters;
  genres = signal<Genre[]>([
    GENRES.ALL,
    GENRES.FANTASY,
    GENRES.SCIENCE_FICTION,
    GENRES.ZOMBIES,
    GENRES.TERROR,
  ]);

  onInputRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);

    this._bookService.filters.mutate((state) => {
      state.pages = value;
    });
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value as Genre;

    this._bookService.filters.mutate((state) => {
      state.genre = value;
    });
  }
}
