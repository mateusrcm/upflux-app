import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-edit-modal-content',
  templateUrl: './edit-modal-content.component.html',
  styleUrls: ['./edit-modal-content.component.css']
})
export class EditModalContentComponent implements OnInit {
  @Input() selected: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
