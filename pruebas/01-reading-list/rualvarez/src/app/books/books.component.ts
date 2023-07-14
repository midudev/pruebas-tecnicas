import { Component, OnInit } from '@angular/core';
import { Library } from './books.model';
import { Books } from '../utils/books';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Array<Library> = []
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.books = Books.getBooksData();
    this.loading = false;
  }

}
