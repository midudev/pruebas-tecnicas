import { Component, Input, OnInit } from '@angular/core';
import { LibraryElement } from 'src/app/interfaces/library';
import { BooksService } from 'src/app/services/books.service';
import { ReadingServiceService } from 'src/app/services/reading-service.service';

@Component({
  selector: 'app-reading-book',
  templateUrl: './reading-book.component.html',
  styleUrls: ['./reading-book.component.css']
})
export class ReadingBookComponent implements OnInit{

  @Input() book: LibraryElement | undefined

  constructor(private readingService: ReadingServiceService, private booksService: BooksService){}

  ngOnInit(): void {
    if(this.book !== undefined && this.book?.book.priority === undefined){
      this.book.book.priority = 0
    }
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

  onChangePrioridad( event: any ){
    const target = event.target as HTMLSelectElement
    const value = parseInt(target.value)
    if(this.book !== undefined)
    this.readingService.changePriority(this.book, value)
  }

}
