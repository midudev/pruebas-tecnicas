import { Injectable } from '@angular/core';
import myData from '../assets/books.json';

type Author = {
  name: string,
  otherBooks: string[]
}

type Book = {
  title: string,
  pages: number,
  genre: string,
  cover: string,
  synopsis: string,
  year: number,
  ISBN: string,
  author: Author
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksUrl = './assets/books.json';

  constructor() { }

  getBooks():Book[] {

    return myData.library.map((item) => item.book);

    /*
    return this.http.get<Book[]>(this.booksUrl)
    .pipe(
      map((response: any) => response as Book[])
    );*/
    console.log(myData);
  }
}
