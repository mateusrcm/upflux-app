import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products/getAll');
  }

  addProduct(product: Product): Observable<any> {
    this.http.post('http://localhost:3000/products/add', product, httpOptions);

    return this.getProducts();
  }

  updateProduct(product: Product): Observable<any> {
    return this.getProducts();
  }

  removeProduct(product: Product): Observable<any> {
    return this.getProducts();
  }
}
