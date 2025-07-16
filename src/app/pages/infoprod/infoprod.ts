import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService, product } from '../../services/products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoprod',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './infoprod.html',
  styleUrls: ['./infoprod.css']
})
export class Infoprod implements OnInit {
  producto!: product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router
    
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

  addToCart() {
   const token = localStorage.getItem('token');
  
  if (!token) {
    alert('Debes iniciar sesión para añadir productos al carrito');
    this.router.navigate(['/login']);
    return;
  }

  this.cartService.addToCart(this.producto);
  alert('Producto añadido al carrito');
  this.router.navigate(['/carrito']); // <-- Redirige al carrito

  }
  
}