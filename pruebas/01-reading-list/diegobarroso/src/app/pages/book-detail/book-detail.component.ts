import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit, OnDestroy{

  book!: Book | null;
  bookService = inject(BooksService);
  id!: string | null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  @HostListener('window:storage', ['$event'])
  handleStorageChange(event: StorageEvent) {
    const booksFromLocastorage = JSON.parse(localStorage.getItem('books')!);
    this.book = booksFromLocastorage.find((b: Book) => b.ISBN === this.id)
  }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('id');
        if (this.id) this.getBook(this.id);
        else this.router.navigate(['']);
      });
    this.bookService.getBookDetail()
      .subscribe(book => {
        this.book = book;
      })
  }

  getBook(id: string) {
    this.bookService.getBook(id)
      .subscribe(book => {
        console.log('Book: ', book)
        this.book = book;
      })
  }

  addOrRemoveBook(book: Book) {
    this.bookService.addOrRemoveBook(book);
  }

  ngOnDestroy() {
    // No olvides desuscribirte cuando el componente se destruya para evitar fugas de memoria
  }

}
