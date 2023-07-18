import { Routes } from '@angular/router';
import { AvailableBooksComponent } from './pages/available-books/available-books.component';
import { ReadingListBooksComponent } from './pages/reading-list-books/reading-list-books.component';

export const routes: Routes = [
  {
    path: 'available-books',
    component: AvailableBooksComponent,
    title: 'Available books',
  },
  {
    path: 'reading-list',
    component: ReadingListBooksComponent,
    title: 'Reading list',
  },
  { path: '', redirectTo: 'available-books', pathMatch: 'full' },
];
