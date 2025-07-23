import { Injectable } from '@angular/core';
import { product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: product[] = [];
  private usuarioId: number | null = null;

  constructor(private http: HttpClient) {
    this.usuarioId = Number(localStorage.getItem('usuarioId'));
    this.loadCart();
  }

  private getStorageKey(): string {
    return this.usuarioId ? `cart_${this.usuarioId}` : 'cart';
  }

  private loadCart() {
    const savedCart = localStorage.getItem(this.getStorageKey());
    this.items = savedCart ? JSON.parse(savedCart) : [];
  }

  private saveCart() {
    if (this.usuarioId !== null) {
      localStorage.setItem(this.getStorageKey(), JSON.stringify(this.items));
    }
  }

  setUsuarioId(id: number) {
    this.usuarioId = id;
    this.loadCart();
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
    localStorage.removeItem(this.getStorageKey());
  }

  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveCart();
  }

  guardarCompra(usuarioId: number): Observable<any> {
    const items = this.items.map(p => ({
      id: p.id,
      cantidad: 1,
      precio: Number(p.precio)
    }));

    const total = Number(
      this.items.reduce((sum, p) => sum + Number(p.precio), 0).toFixed(2)
    );

    return this.http.post('http://localhost:3000/api/compras', {
      usuarioId,
      items,
      total
    });
  }
}

