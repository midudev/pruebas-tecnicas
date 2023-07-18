import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  activo: boolean = false;
  nuevaLista: any[] = [];
  contador: boolean = false;
  miLista: boolean = false;


  constructor(private http: HttpClient) {
    // const localStorageBooks = window.localStorage.getItem('books');
    // if (localStorageBooks) {
    //   this.nuevaLista = JSON.parse(localStorageBooks);
    // }
  }

  onActive() {
    this.activo = !this.activo;
  }

  getbooks(): Observable<any> {
    return this.http.get<any>('../assets/books.json')
  }

  getLocalStorageBooks(): any[] {
    const localStorageBooks = window.localStorage.getItem('books');
    if (localStorageBooks) {
      return JSON.parse(localStorageBooks);
    } else {
      return [];
    }
  }

  private booksSubject = new Subject<any[]>();
  books$ = this.booksSubject.asObservable();

  updateLocalStorageBooks(books: any[]): void {
    window.localStorage.setItem('books', JSON.stringify(books));
    this.booksSubject.next(books);
  }

}
