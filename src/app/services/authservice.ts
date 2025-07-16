import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  isLoggedIn(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario'); // Limpia también el ID
  }

  getUserId(): number | null {
    const id = localStorage.getItem('usuario');
    return id ? Number(id) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}