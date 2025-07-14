import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, product } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infoprod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infoprod.html',
  styleUrls: ['./infoprod.css']
})
export class Infoprod implements OnInit {
  producto!: product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (data) => {
          this.producto = data;
        },
        error: (err) => {
          console.error('Error cargando producto:', err);
        }
      });
    }
  }
}