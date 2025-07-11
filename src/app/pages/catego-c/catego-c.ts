import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products';
import { product } from '../../services/products';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catego-c',
  imports: [CommonModule,RouterModule],
  templateUrl: './catego-c.html',
  styleUrl: './catego-c.css'
})
export class CategoC {
productos: product[] = [];
  categoriaSelec: string = '';

  constructor(
    private route: ActivatedRoute,
    private productSer: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoriaSelec = params['categoria'];
      if (this.categoriaSelec) {
        this.productSer.getProductsByCategory(this.categoriaSelec).subscribe(
          (data: product[]) =>{console.log('Productos recibidos:', data);
           this.productos = data},
          (error: any) => console.error('Error al obtener productos', error)
        );
      }
    });
  }
  // 👇 Esta es la función que necesita *ngFor para trackBy
  trackById(index: number, item: product): number {
    return item.id;
  }
}
