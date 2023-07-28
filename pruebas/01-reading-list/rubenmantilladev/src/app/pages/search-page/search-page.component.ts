import { BooksService } from 'src/app/services/books.service';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookFavorite } from 'src/app/models/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  books: BookFavorite[] = [];

  searchResults: BookFavorite[] = [];
  private searchResultsSubscription!: Subscription;

  private router = inject(Router);
  private booksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
      }
    });

    this.searchResultsSubscription = this.booksService.searchResults$.subscribe((results) => {
      this.searchResults = results;
    });
  }

  ngOnDestroy(): void {
    this.searchResultsSubscription.unsubscribe();
  }

  searching(searchInput: string) {
    console.log(searchInput);
    this.booksService.searchBooks(searchInput, this.books);
  }

  isSearchPage() {
    return this.router.isActive('/search', true);
  }
}
