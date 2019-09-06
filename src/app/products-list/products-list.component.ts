import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() detail: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  @Input() products: Product[];

  constructor() { }

  ngOnInit() { }

  onEdit(product: Product) {
    this.edit.emit({ product })
  }

  onDetail(product: Product) {
    this.detail.emit({ product })
  }

  onRemove(product: Product) {
    this.remove.emit({ product })
  }
}
