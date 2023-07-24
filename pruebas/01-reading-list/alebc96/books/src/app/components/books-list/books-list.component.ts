import { Component, OnInit } from '@angular/core';
import { LibraryElement } from 'src/app/interfaces/library';
import { BooksService } from 'src/app/services/books.service';
import { ReadingServiceService } from 'src/app/services/reading-service.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  booksList: LibraryElement[] | undefined;
  booksListCopy: LibraryElement[] | undefined;
  readingList: LibraryElement[] | undefined;
  libraryLength: number = 0;
  readingLength: number = 0;
  genreSelected: string = 'All';
  pagesSelected: number = 0;

  constructor(
    private booksService: BooksService,
    private readingService: ReadingServiceService
  ) {}

  ngOnInit(): void {
    this.booksService.getDataFromJson().subscribe({
      next: (data) => {
        this.booksList = data.library;
        this.booksListCopy = data.library;
        this.booksService.booksList.next(
          data.library.length - this.readingLength
        );
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.readingService.getFromLocalStorage();
    this.readingService.readingList.subscribe({
      next: (data) => {
        this.readingList = data;
        this.readingLength = this.readingService.getReadingListlength();
        if (this.booksList)
          this.booksService.booksList.next(
            this.booksList?.length - this.readingLength
          );
      },
    });

    this.booksService.booksList.subscribe({
      next: (data) => {
        this.libraryLength = data;
      },
    });
  }

  isNotBooksToRead(): boolean {
    if (this.readingService.getReadingListlength() === 0) return true;
    else return false;
  }

  manageGenreSelected(event: string) {
    this.genreSelected = event;
    this.filterByGenre(this.genreSelected);
    if (this.booksList) this.libraryLength = this.booksList?.length;
  }

  filterByGenre(genre: string) {
    if (genre === 'All') {
      this.booksList = this.booksListCopy;
    } else {
      this.booksList = this.booksListCopy?.filter((book) => {
        return book.book.genre === genre;
      });
    }
  }

  managePagesSelected(event: number) {
    this.pagesSelected = event;
    this.filterByPages(event);
    if (this.booksList) this.libraryLength = this.booksList?.length;
  }

  filterByPages(pages: number) {
    if (pages === 0) {
      this.booksList = this.booksListCopy;
    } else {
      this.booksList = this.booksListCopy?.filter((book) => {
        return book.book.pages >= pages;
      });
    }
  }

  manageSearch(search: string) {
    this.booksList = this.booksListCopy?.filter((book) => {
      return (
        book.book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.book.author.name.toLowerCase().includes(search.toLowerCase()) ||
        book.book.synopsis.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  sortReadingList(){
    this.readingService.readingList?.value.sort((a, b) => a.book.priority - b.book.priority)
    this.readingService.saveOnLocalStorage()
  }
}
