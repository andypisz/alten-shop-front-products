import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) { }

  //On init get product list from server
  ngOnInit(): void {
    this.productService.getProducts().subscribe(productList => {
      this.products = productList;
    });
  }

}
