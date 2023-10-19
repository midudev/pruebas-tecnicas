import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Library } from 'src/app/models/data-from-api.interface';
import { BooksService } from 'src/app/services/books.service';
import { AvailableBooksTableComponent } from 'src/app/components/available-books-table/available-books-table.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';

@Component({
  selector: 'book-available-books',
  standalone: true,
  imports: [
    CommonModule,
    AvailableBooksTableComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
  ],
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss'],
})
export class AvailableBooksComponent implements OnInit {
  public availableBooks!: Library[];

  booksService = inject(BooksService);

  ngOnInit(): void {
    this.getAvailableBooks();
  }

  getAvailableBooks() {
    this.booksService.getAvailable().subscribe({
      next: (library: Library[]) => {
        this.availableBooks = library;
      },
    });
  }

  filterByGenre(event: MatChipSelectionChange) {
    const selectedGenre = event.source?.value;
    this.getAvailableBooks();
    if (selectedGenre !== 'Todos') {
      this.availableBooks = this.availableBooks.filter(
        book => book.book.genre === selectedGenre
      );
    }
  }
}
