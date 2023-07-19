import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.css']
})
export class BooksFilterComponent implements OnInit{

  @Output() genreSelected = new EventEmitter<string>()
  @Output() pagesSelected = new EventEmitter<number>()
  @Output() search = new EventEmitter<string>()
  selectedPage: number = 0

  constructor(){}

  ngOnInit(): void {
    
  }

  onGenreSelected(event: any){
    const target = event.target as HTMLSelectElement
    const genreSelected = target.value
    this.genreSelected.emit(genreSelected)
  }

  onPagesChanges(event: any){
    const target = event.target as HTMLSelectElement
    const pagesSelected = parseInt(target.value)
    this.selectedPage = parseInt(target.value)
    this.pagesSelected.emit(pagesSelected)
  }

  onSearchText( event: any ){
    const target = event.target as HTMLSelectElement
    const text = target.value
    this.search.emit(text)
  }

}
