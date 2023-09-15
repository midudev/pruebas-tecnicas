import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient);

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('../../assets/data/products.json');
  }
}
