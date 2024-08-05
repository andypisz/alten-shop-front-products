import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductService } from 'app/product.service';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
