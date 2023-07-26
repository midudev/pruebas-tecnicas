import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  bookListToReadNumber!: number;
  bookService = inject(BooksService);

  theme = 'dark';

  ngOnInit(): void {
    this.bookService.getBookListToReadNumber()
      .subscribe(bookListToReadNumber => this.bookListToReadNumber = bookListToReadNumber);
    this.changeTheme(this.theme);
  }

  changeTheme(theme: string) {
    this.theme = theme;
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
      htmlTag.setAttribute('data-theme', theme);
    }
  }

}
