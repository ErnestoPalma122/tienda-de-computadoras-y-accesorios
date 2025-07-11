import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.http.post('http://localhost:3000/api/users/register', {
      nombre: this.name,
      correo: this.email,
      contraseña: this.password
    }).subscribe(
      res => {
      alert('Usuario registrado con éxito');
      this.router.navigate(['/login']); // redirección automática
      },
      err => {
        let errorMessage = 'Error al registrar';

        if (err.error instanceof ProgressEvent) {
          errorMessage = 'No se pudo conectar con el servidor. Verifica que el backend esté corriendo.';
        } else if (typeof err.error === 'string') {
          errorMessage = err.error; // para texto plano enviado desde el backend
        } else if (err.error.message) {
          errorMessage = err.error.message; // si viene en objeto JSON
        }

        alert(errorMessage);
        console.error('Detalles del error:', err);
      }

    );
  }


}
