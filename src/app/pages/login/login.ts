import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  correo: string = '';
  contrasena: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/api/auth/login', {
      correo: this.correo,
      contraseña: this.contrasena
    }).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // redirige después de login
      },
      error: err => {
        alert(err.error.mensaje || 'Error al iniciar sesión');
      }
    });
  }

}
