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
  milibro:boolean = false;

  private booksSubject = new Subject<any[]>();
  books$ = this.booksSubject.asObservable();

  private localStorageUpdateSubject = new Subject<any[]>();
  localStorageUpdate$ = this.localStorageUpdateSubject.asObservable();

  constructor(private http: HttpClient) {
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

 updateLocalStorageBooks(books: any[]): void {
    window.localStorage.setItem('books', JSON.stringify(books));
    this.booksSubject.next(books);

    // Emitir el evento de actualización del localStorage
    this.localStorageUpdateSubject.next(books);
  }

}
