/*import { Component, input, output } from '@angular/core';
import { Product } from '../Product Items/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = input.required<Product[]>();

  deleteProduct = output<number>();

  removeProduct(id: number) {
    const updated = this.products().filter(p => p.id !== id);
    this.products.set(updated);
  }
}*/
import { Component, input, signal, effect } from '@angular/core';
import { Product } from '../Product Items/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  productsInput = input.required<Product[]>();
  products = signal<Product[]>([]);

  constructor(){
    effect(()=>{
      this.products.set(this.productsInput());
    });
  }

  deleteProduct(id:number){
    this.products.set(this.products().filter(p=>p.id!==id));
  }
}