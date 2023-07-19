import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Library } from 'src/app/models/data-from-api.interface';
import { BooksService } from 'src/app/services/books.service';
import { AvailableBooksTableComponent } from 'src/app/components/available-books-table/available-books-table.component';

@Component({
  selector: 'book-available-books',
  standalone: true,
  imports: [CommonModule, AvailableBooksTableComponent],
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss'],
})
export class AvailableBooksComponent implements OnInit {
  public availableBooks: Library[] = [];

  booksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.available.subscribe(library => {
      this.availableBooks = library;
    });
  }
}
