import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { product } from '../../services/products';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  items: product[];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }
  getTotal(): number {
    return this.items.reduce((sum, item) => {
      const precio = parseFloat(item.precio as any);
      return !isNaN(precio) ? sum + precio : sum;
    }, 0);
  }
  finalizarCompra() {
  const usuarioId = Number(localStorage.getItem('usuarioId'));
  if (!usuarioId) {
    alert('Debes iniciar sesión para completar la compra.');
    return;
  }

  this.cartService.guardarCompra(usuarioId).subscribe({
    next: () => {
      alert('Compra realizada con éxito.');
      this.clearCart();
    },
    error: (err) => {
      console.error('Error al guardar la compra:', err);
      alert('Ocurrió un error al guardar la compra.');
    }
  });
}


}
