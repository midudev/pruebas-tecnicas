import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfBooksComponent } from './pages/list-of-books/list-of-books.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfBooksComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
