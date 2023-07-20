import { Component, Input } from '@angular/core';
import { LibraryElement } from 'src/app/interfaces/library';
import { ReadingServiceService } from 'src/app/services/reading-service.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent{

  @Input() book: LibraryElement | undefined

  constructor(private readingService: ReadingServiceService, private booksService: BooksService){}


  onAddToReadingList(): void{
    if(this.book !== undefined) this.readingService.addBookToReadingList(this.book)
  }

  onRemoveFromTheReadingList(): void{
    if(this.book !== undefined) this.readingService.removeFromReadingList(this.book)
  }

  isOnReadingList(): boolean{
    if(this.book !== undefined) return this.readingService.isOnReadingList(this.book)
    else return false
  }

  onGoToDetails(){
    if(this.book) this.booksService.goToDetails(this.book?.book?.title)
  }
}
