import { Component } from '@angular/core';
import { product } from '../../services/products';
import { Products } from '../../services/products';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos : product[] = [];
  constructor(private product:Products){
    this.productos= this.product.getProducts();
  }
}
