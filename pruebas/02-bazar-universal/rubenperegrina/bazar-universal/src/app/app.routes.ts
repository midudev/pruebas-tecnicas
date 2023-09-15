import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/search/search.component'),
        title: 'Search'
    },
    {
        path: 'items?search=/:product-name',
        loadComponent: () => import('./components/product-list/product-list.component'),
        title: 'Product List'
    },
    {
        path: 'items/:id',
        loadComponent: () => import('./components/product-detail/product-detail.component'),
        title: 'Product Detail'
    }
];
