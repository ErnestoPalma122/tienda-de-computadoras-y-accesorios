import { Injectable } from '@angular/core';
import { product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: product[] = [];
  constructor(private http: HttpClient) {
    const savedCart = localStorage.getItem('cart');
    this.items = savedCart ? JSON.parse(savedCart) : [];
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  addToCart(product: product) {
    this.items.push(product);
    this.saveCart();
  }

  getItems(): product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveCart();
  }
  guardarCompra(usuarioId: number): Observable<any> {
  const items = this.items.map(p => ({
    id: p.id,
    cantidad: 1,
    precio: p.precio
  }));

  const total = this.items.reduce((sum, p) => sum + p.precio, 0);

  return this.http.post('http://localhost:3000/api/compras', {
    usuarioId,
    items,
    total
  });
}


}
