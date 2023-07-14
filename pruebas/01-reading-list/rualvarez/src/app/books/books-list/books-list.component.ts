import { Component, Input, OnInit } from '@angular/core';
import { Library } from '../books.model';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() set books(data: Array<Library>) {
    this.libraryBooks = structuredClone(data);
  }

  libraryBooks: Array<Library> = [];

  constructor() {}

  ngOnInit(): void {
  }

}
