import { Component, input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product Items/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  @Output() delete = new EventEmitter<number>();

  like() {
    const p = this.product();
    p.likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }
}