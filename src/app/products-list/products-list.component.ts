import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() detail: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  products: Product[] = [
    {
      id: 1,
      name: 'Banana',
      price: 2.13,
      productor: 'Corupa INC.',
      stock_quantity: 5000,
      warehouse: '1100',
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

  onEdit(product: Product) {
    console.log(`Editing: ${product}`);

    this.edit.emit({product})
  }

  onDetail(product: Product) {
    console.log(`Detailing: ${product}`);

    this.detail.emit({product})
  }

  onRemove(product: Product) {
    console.log(`Removing: ${product}`);

    this.remove.emit({product})
  }
}
