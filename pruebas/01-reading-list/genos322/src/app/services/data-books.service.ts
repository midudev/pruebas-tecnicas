import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataBooksService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('assets/data/books.json');
  }
}
