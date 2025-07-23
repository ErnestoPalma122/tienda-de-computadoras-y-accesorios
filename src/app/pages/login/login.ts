import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  correo: string = '';
  contrasena: string = '';

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) {}

 login() {
  this.http.post<any>('http://localhost:3000/api/auth/login', {
    correo: this.correo,
    contraseña: this.contrasena
    }).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('usuarioId', res.usuario.id.toString()); // <-- Guardar el ID

        this.cartService.setUsuarioId(res.usuario.id); // ✅ ACTUALIZA el carrito con el nuevo usuario

        alert('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // redirige después de login
      },
      error: err => {
        alert(err.error.mensaje || 'Error al iniciar sesión');
      }
    });
  }

}
