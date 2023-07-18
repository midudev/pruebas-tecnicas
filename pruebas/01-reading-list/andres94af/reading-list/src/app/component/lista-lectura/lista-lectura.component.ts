import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-lista-lectura',
  templateUrl: './lista-lectura.component.html',
  styleUrls: ['./lista-lectura.component.css']
})
export class ListaLecturaComponent {

  @Input() readingList:Book[] = [];
  @Input() books:Book[] = [];

  constructor(private bookService:BookService){}

  removeBook(book:Book, index:number){
    this.readingList.splice(index, 1);
    this.books.unshift(book);
    this.bookService.saveToLocalstorage(this.books, this.readingList);
  }

}
