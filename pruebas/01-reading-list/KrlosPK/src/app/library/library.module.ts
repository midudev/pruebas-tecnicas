import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { ListOfBooksComponent } from './pages/list-of-books/list-of-books.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListOfBooksComponent, ReadingListComponent, FiltersComponent],
  imports: [CommonModule, LibraryRoutingModule, ReactiveFormsModule],
})
export class LibraryModule {}
