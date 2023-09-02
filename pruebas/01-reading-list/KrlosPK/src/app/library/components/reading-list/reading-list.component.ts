import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from '../../interfaces/types';

@Component({
  selector: 'library-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css'],
})
export class ReadingListComponent {
  @Input()
  public readingList: Books[] = [];

  @Output()
  public onRemoveFromReadingList = new EventEmitter<string>();

  public isReadingList: boolean = false;
  toggleReadingList(): void {
    this.isReadingList = !this.isReadingList;
  }
  removeFromReadingList(bookId: string): void {
    this.onRemoveFromReadingList.emit(bookId);
  }
}
