import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  urlBooks:string = '../../assets/books.json';

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get<any>(this.urlBooks);
  }
}
