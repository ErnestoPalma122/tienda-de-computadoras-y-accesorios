import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from './services/authservice'; // ajusta la ruta si es distinta

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Authservice); // ✅ inyectamos el servicio

  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};