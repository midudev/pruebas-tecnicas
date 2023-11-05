import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private urlBooks: string = '../../assets/books.json';

  constructor(private http: HttpClient) {}

  getDataBooks() {
    return this.http.get<any>(this.urlBooks);
  }

  saveToLocalstorage(books: Book[], readingList: Book[]) {
    localStorage.setItem('books', this.arrayToString(books));
    localStorage.setItem('reading_list', this.arrayToString(readingList));
  }

  getBooksFromLocalstorage(){
    var books = localStorage.getItem('books');
    var array:Book[] = [];
    if (books !== null) {
      array = JSON.parse(books);
    }
    return array;
  }

  getReadingListFromLocalstorage(){
    var books = localStorage.getItem('reading_list');
    var array:Book[] = [];
    if (books !== null) {
      array = JSON.parse(books);
    }
    return array;
  }

  arrayToString(array: any[]) {
    return JSON.stringify(array);
  }

  existLocalstorage() {
    const books = localStorage.getItem('books');
    const readingList = localStorage.getItem('reading_list');
    if (books && readingList) {
      return true;
    } else {
      return false;
    }
  }
}
