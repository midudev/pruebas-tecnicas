import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';

@Pipe({
  name: 'filterByGenre',
  pure: true
})
export class FilterByGenrePipe implements PipeTransform {

  transform(books: Book[], genre: string, pageNumber: number): Book[] {
    if (!genre) return books.filter(book => book.pages >= pageNumber)
    return books.filter(book => book.genre === genre && book.pages >= pageNumber);
  }

}
