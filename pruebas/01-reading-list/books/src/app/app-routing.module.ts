import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'books/:title', component: BookDetailsComponent},
  {path: '**', redirectTo: 'books'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
