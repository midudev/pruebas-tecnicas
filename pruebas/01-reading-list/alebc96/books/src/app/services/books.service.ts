import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Library, LibraryElement } from '../interfaces/library';
import { Observable, BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public booksList = new BehaviorSubject<number>(0)

  constructor(private http: HttpClient, private router: Router) { }

  getDataFromJson(): Observable<Library>{
    return this.http.get<Library>('../../assets/books.json')
  }

  goToDetails(title: string){
    this.router.navigate([`books/${title}`])
  }

  getBookByTitle(title: string){
    this.http.get<Library>('../../assets/books.json').subscribe({
      next: data => {
        const bookFinded = data.library.find( book => book.book.title === title )
        if(bookFinded) return bookFinded
        else return []
      },
      error: error => {
        console.log(error)
      }
    })
  }

  getBookByTitle2(title: string): Promise<LibraryElement>{
    return new Promise((resolve, reject) => {
      this.http.get<Library>('../../assets/books.json').subscribe({
        next: data => {
          const bookFinded = data.library.find( book => book.book.title === title )
          if(bookFinded) resolve(bookFinded)
        },
        error: error => {
          console.log(error)
          reject(error)
        }
      })
    })
  }

  

}
