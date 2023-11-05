import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, LibraryElement } from 'src/app/interfaces/library';
import { BooksService } from 'src/app/services/books.service';
import { ReadingServiceService } from 'src/app/services/reading-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  bookInfoElement!: LibraryElement

  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute, private router: Router, private readingService: ReadingServiceService){}

  ngOnInit(): void {
    this.booksService.getBookByTitle2(this.activatedRoute.snapshot.params['title'])
    .then( book => {
      this.bookInfoElement = book
    }).catch(error => {
      console.log(error)
    })
  }

  onGoBack(){
    this.router.navigate(['books'])
  }

  isOnReadingList(){
    if(this.bookInfoElement !== undefined){
      return this.readingService.isOnReadingList(this.bookInfoElement)
    }
    return false
  }

  addToReadingList(){
    this.readingService.addBookToReadingList(this.bookInfoElement)
  }

  removeFromTheReadinglist(){
    this.readingService.removeFromReadingList(this.bookInfoElement)
  }

}
