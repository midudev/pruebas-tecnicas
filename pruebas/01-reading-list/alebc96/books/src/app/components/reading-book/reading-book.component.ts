import { Component, Input } from '@angular/core';
import { LibraryElement } from 'src/app/interfaces/library';
import { BooksService } from 'src/app/services/books.service';
import { ReadingServiceService } from 'src/app/services/reading-service.service';

@Component({
  selector: 'app-reading-book',
  templateUrl: './reading-book.component.html',
  styleUrls: ['./reading-book.component.css']
})
export class ReadingBookComponent {

  @Input() book: LibraryElement | undefined

  constructor(private readingService: ReadingServiceService, private booksService: BooksService){}

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
