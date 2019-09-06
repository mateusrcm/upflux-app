import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  closeResult: string;
  products: Product[];
  selected: Product;
  isEditing: boolean = false;
  isNew: boolean = false;

  constructor(
    private modalService: NgbModal,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(res => this.products = res)
  }

  onNew(content) {
    this.selected = new Product();
    this.isEditing = true;
    this.isNew = true;
    this.open(content);
  }

  onEdit($event, content) {
    this.isEditing = true;
    this.selected = { ...$event.product };
    this.open(content);
  }

  onDetails($event, content) {
    this.selected = { ...$event.product };
    this.open(content);
  }

  onRemove($event) {
    this.productsService.removeProduct($event.product);
    this.getProducts();

    this.selected = null;
    this.isEditing = false;
    this.isNew = false;
  }

  onSave(modal) {
    modal.close('Save click');

    if (this.isNew) {
      console.log('novo');
      this.productsService.addProduct(this.selected);
    } else {
      console.log('update');
      this.productsService.updateProduct(this.selected);
    }
    this.getProducts();

    this.selected = null;
    this.isEditing = false;
    this.isNew = false;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
