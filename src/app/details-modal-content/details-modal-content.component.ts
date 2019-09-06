import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-details-modal-content',
  templateUrl: './details-modal-content.component.html',
  styleUrls: ['./details-modal-content.component.css']
})
export class DetailsModalContentComponent implements OnInit {
  @Input() selected: Product;

  constructor() { }

  ngOnInit() {
  }
}
