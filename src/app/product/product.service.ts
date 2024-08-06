import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL to web api
  private apiUrl = 'assets/products.json';  

  constructor(private httpClient: HttpClient) { }
  
  /** GET products from the server */
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map((response) => {
         return response.data;
       }), catchError(error => {
        const err = new Error(`Error on get products: ${error}`); 
        return throwError(() => err);
       })
    );
  }
}
