import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../model/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  closeResult: string;
  selected: Product;
  isEditing: boolean = false;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onEdit($event, content) {
    this.isEditing = true;
    this.selected = $event.product;
    this.open(content);
  }

  onDetails($event, content) {
    this.selected = $event.product;
    this.open(content);
  }

  onRemove($event) {

  }

  onSave(modal) {
    modal.close('Save click');
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
