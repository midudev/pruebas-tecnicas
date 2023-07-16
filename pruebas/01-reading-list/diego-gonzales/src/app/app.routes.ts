/* eslint-disable @typescript-eslint/promise-function-async */
import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Books - Home',
    loadComponent: () => import('~/pages/books-home/books-home.component'),
  },
  {
    path: 'detail/:id',
    title: 'Book - Detail',
    loadComponent: () => import('~/pages/book-detail/book-detail.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
