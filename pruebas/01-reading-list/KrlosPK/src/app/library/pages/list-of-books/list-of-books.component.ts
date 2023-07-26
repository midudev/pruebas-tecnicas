import { Component, OnInit } from '@angular/core';

import listOfBooks from '../../../../../../books.json';
import { Books } from '../../interfaces/types.d';

@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css'],
})
export class ListOfBooksComponent implements OnInit {
  public originalBooks: Books[] = listOfBooks.library;
  public books: Books[] = structuredClone(this.originalBooks);
  public readingList: Books[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getFromLocalStorage();
    this.syncTabsLocalStorage();
  }

  isOnReadingList(id: string): boolean {
    return this.readingList.find((book) => book.book.ISBN === id) !== undefined;
  }

  addToReadingList(id: string): void {
    if (this.readingList.find((book) => book.book.ISBN === id)) return;

    this.readingList.push(this.books.find((book) => book.book.ISBN === id)!);

    this.saveToLocalStorage();
  }

  handleRemove(bookId: string): void {
    this.readingList = this.readingList.filter(
      (book) => book.book.ISBN !== bookId
    );

    this.saveToLocalStorage();
  }

  handleFilterByPages(pages: string): void {
    const maxPages = parseInt(pages);

    if (!maxPages) {
      this.books = structuredClone(this.originalBooks);
    } else {
      this.books = this.originalBooks.filter(
        (item) => item.book.pages <= maxPages
      );
    }
  }

  handleFilterByCategory(category: string): void {
    const maxCategory = category;

    if (!maxCategory) {
      this.books = structuredClone(this.originalBooks);
    } else {
      this.books = this.originalBooks.filter(
        (item) => item.book.genre === maxCategory
      );
    }
  }

  handleClearFilters(): void {
    this.books = structuredClone(this.originalBooks);
  }

  syncTabsLocalStorage(): void {
    window.addEventListener('storage', (event) => {
      if (event.key === 'readingList') {
        this.readingList = JSON.parse(event.newValue!);
      }
    });
  }

  saveToLocalStorage(): void {
    localStorage.setItem('readingList', JSON.stringify(this.readingList));
  }

  getFromLocalStorage(): void {
    const localStorageReadingList = JSON.parse(
      localStorage.getItem('readingList')!
    );

    if (!localStorageReadingList) return;

    this.readingList = JSON.parse(localStorage.getItem('readingList')!);
  }
}
