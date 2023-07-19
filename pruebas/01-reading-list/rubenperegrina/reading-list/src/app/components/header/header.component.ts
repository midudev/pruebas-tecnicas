import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Library } from 'src/app/models/data-from-api.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'book-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public readingListBooks: Library[] = [];
  public availableBooks: Library[] = [];

  booksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.reading.subscribe(library => {
      this.readingListBooks = library;
    });
    this.booksService.available.subscribe(library => {
      this.availableBooks = library;
    });
  }
}
