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
    let res = this.http.get('http://localhost:3000/products/getAll');

    return res;
  }

  addProduct(product: Product): Observable<any> {
    let res = this.http.post('http://localhost:3000/products/add', { product }, httpOptions);

    return res;
  }

  updateProduct(product: Product): Observable<any> {
    let res = this.http.post('http://localhost:3000/products/update', { product }, httpOptions);

    return res;
  }

  removeProduct(product: Product): Observable<any> {
    let res = this.http.post('http://localhost:3000/products/remove', { product }, httpOptions);

    return res;
  }
}
