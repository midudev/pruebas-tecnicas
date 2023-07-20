import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from '../book-item/book-item.component';
import { StoreService } from '~/services/store.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookItemComponent],
  templateUrl: './book-list.component.html',
})
export default class BookListComponent {
  private _storeService = inject(StoreService);
  bookList = this._storeService.filteredBooks;
}
