import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Books } from '../../interfaces/types';

@Component({
  selector: 'library-filters',
  templateUrl: './filters.component.html',
  styles: [],
})
export class FiltersComponent implements OnInit {
  @Input()
  public books: Books[] = [];

  @Output()
  public filterBooksByPages = new EventEmitter<string>();
  @Output()
  public filterBooksByCategory = new EventEmitter<string>();
  @Output()
  public clearAllFilters = new EventEmitter<string>();

  public genres: string[] = [];
  public minMaxPages: [number, number] = [0, 0];
  public filterByPagesForm: FormGroup = this.fb.group({
    pages: ['', []],
  });
  public filterByCategoryForm: FormGroup = this.fb.group({
    category: ['Todos', []],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getGenres();
    this.getMinimumAndMaximumPages();
  }

  filterByPages(pages: string): void {
    this.filterBooksByPages.emit(pages);
  }

  filterByCategory(category: string): void {
    this.filterBooksByCategory.emit(category);
  }

  clearFilters(): void {
    this.clearAllFilters.emit('');
    this.filterByCategoryForm.patchValue({ category: 'Todos' });
    this.filterByPagesForm.reset();
  }

  getGenres(): void {
    const filterGenres = new Set(this.books.map((item) => item.book.genre));
    this.genres = Array.from(filterGenres);
  }

  getMinimumAndMaximumPages(): void {
    const pagesArray = this.books.map((item) => item.book.pages);
    const minimumPages = Math.min(...pagesArray);
    const maximumPages = Math.max(...pagesArray);

    this.minMaxPages = [minimumPages, maximumPages];
  }
}
