import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  private urlBooks: string = '../../assets/books.json';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>(this.urlBooks);
  }
}
