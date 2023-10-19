import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from 'src/app/models/products.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'bu-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export default class ProductListComponent {
  public products!: Products[];
  @Input('product-name') productName?: string;
  productService = inject(ProductService);
  
  ngOnInit(): void {
    console.log(this.productName)
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (products: Products[]) => {
        console.log("🚀 ~ file: product-list.component.ts:26 ~ ProductListComponent ~ this.productService.getProducts ~ products:", products)
        this.products = products;
      },
    });
  }
}
