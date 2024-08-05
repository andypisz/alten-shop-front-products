import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockedProducts from '../assets/products.json';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  
  /** GET products from the server */
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/products.json');
  }
}
