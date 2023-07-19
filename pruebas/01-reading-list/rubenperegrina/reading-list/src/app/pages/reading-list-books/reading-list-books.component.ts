import { Component, OnInit, inject } from '@angular/core';
import { Library } from 'src/app/models/data-from-api.interface';
import { BooksService } from 'src/app/services/books.service';
import { ReadingBooksTableComponent } from 'src/app/components/reading-books-table/reading-books-table.component';

@Component({
  selector: 'book-reading-list-books',
  standalone: true,
  imports: [ReadingBooksTableComponent],
  templateUrl: './reading-list-books.component.html',
  styleUrls: ['./reading-list-books.component.scss'],
})
export class ReadingListBooksComponent implements OnInit {
  public readingListBooks: Library[] = [];

  booksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.getReading().subscribe({
      next: (library: Library[]) => {
        this.readingListBooks = library;
      },
    });
  }
}
