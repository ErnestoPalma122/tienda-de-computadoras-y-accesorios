import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product, ProductsService } from '../../services/products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Productos implements OnInit {
  productos: product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error cargando productos:', err)
    });
  }
}



/*import { Component } from '@angular/core';
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
}*/
