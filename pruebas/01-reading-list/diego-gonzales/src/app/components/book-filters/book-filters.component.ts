import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GENRES, type Genre } from '~/consts';

@Component({
  selector: 'app-book-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-filters.component.html',
})
export class BookFiltersComponent {
  genres = signal<Genre[]>([
    GENRES.FANTASY,
    GENRES.SCIENCE_FICTION,
    GENRES.ZOMBIES,
    GENRES.TERROR,
  ]);
}
