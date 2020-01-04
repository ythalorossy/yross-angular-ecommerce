import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<[Product]>("/assets/products.json");
  }

  getProductById(productId: number): Observable<Product> {
    return this.getProducts()
      .pipe(
        map(products => products.find(p => p.id === productId))
      );
  }
}
