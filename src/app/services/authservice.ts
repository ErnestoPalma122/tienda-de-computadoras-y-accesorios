import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  isLoggedIn(): boolean {
    // Verifica que esté en el navegador
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  logout(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}