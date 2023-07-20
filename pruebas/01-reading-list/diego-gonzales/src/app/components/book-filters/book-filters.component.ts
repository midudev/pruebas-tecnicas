import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOK_MAPPING, GENRES, type Genre } from '~/consts';
import { StoreService } from '~/services/store.service';

@Component({
  selector: 'app-book-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-filters.component.html',
})
export class BookFiltersComponent {
  private _storeService = inject(StoreService);
  filters = this._storeService.filters;
  filteredBooks = this._storeService.filteredBooks;
  genres = signal<Genre[]>([
    GENRES.ALL,
    GENRES.FANTASY,
    GENRES.SCIENCE_FICTION,
    GENRES.ZOMBIES,
    GENRES.TERROR,
  ]);
  bookMapping = BOOK_MAPPING;

  onInputRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);

    this._storeService.updatePagesFilter(value);
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value as Genre;

    this._storeService.updateGenreFilter(value);
  }
}
