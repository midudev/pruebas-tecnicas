import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  { path: ':id',
    component: BookDetailComponent,
    title: 'Book Details'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
