import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import BookListComponent from '~/components/book-list/book-list.component';
import { BookFiltersComponent } from '~/components/book-filters/book-filters.component';
import { ReadingListComponent } from '~/components/reading-list/reading-list.component';
import { BOOK_MAPPING } from '~/consts';
import { StoreService } from '~/services/store.service';

@Component({
  selector: 'app-books-home',
  standalone: true,
  imports: [
    CommonModule,
    BookListComponent,
    ReadingListComponent,
    BookFiltersComponent,
  ],
  templateUrl: './books-home.component.html',
})
export default class BooksHomeComponent {
  private _storeService = inject(StoreService);
  totalBooksAvailable = this._storeService.totalBooksAvailable;
  totalBooksInReadingList = this._storeService.totalBooksInReadingList;
  bookMapping = BOOK_MAPPING;

  constructor() {
    this._storeService.toggleShowSearchBox();
  }

  ngOnDestroy() {
    this._storeService.toggleShowSearchBox();
  }
}
