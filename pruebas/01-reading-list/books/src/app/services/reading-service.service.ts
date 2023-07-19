import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LibraryElement } from '../interfaces/library';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReadingServiceService {

  public readingList = new BehaviorSubject<LibraryElement[]>([])

  constructor (private toast: ToastrService) { }

  addBookToReadingList(element: LibraryElement): void{
    const books = [...this.readingList.value]
    const bookFinded = books.find( book => book.book.title === element.book.title)
    if(!bookFinded){
      books.push(element)
      this.readingList.next(books)
      this.saveOnLocalStorage()
      this.toast.success('Book added to reading list', "Success", {timeOut: 1000, positionClass: 'toast-bottom-left'})
    }else{
      this.toast.warning("Book already on the reading list", "Warning", {timeOut: 1000, positionClass: 'toast-bottom-left'})
    }
  }

  removeFromReadingList(element: LibraryElement): void{
    const books = [...this.readingList.value]
    const filteredBooks = books.filter((_book) => {
      return _book.book.title !== element.book.title
    })
    this.readingList.next(filteredBooks)
    this.saveOnLocalStorage()
    this.toast.info("Book removed from reading list", "Info", {timeOut: 1000, positionClass: 'toast-bottom-left'})
  }

  isOnReadingList(element: LibraryElement): boolean{
    const bookFinded = this.readingList.value.find( _book => _book.book.title === element.book.title)
    if(bookFinded) return true
    else return false
  }

  saveOnLocalStorage(){
    localStorage.setItem('reading_list', JSON.stringify(this.readingList.value))
  }

  getFromLocalStorage(): void{
    const readingListFromLocal = localStorage.getItem('reading_list')
    if(!readingListFromLocal){
      this.readingList.next([])
    }else{
      this.readingList.next(JSON.parse(readingListFromLocal))
      this.readingList.value
    }
  }

  getReadingListlength(): number{
    return this.readingList.value.length
  }

}
