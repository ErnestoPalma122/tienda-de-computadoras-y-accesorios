import { Injectable } from '@angular/core';


export interface product{
  id:number;
  nombre: string;
  descripcion:string;
  precio:number;
  imagen:string;

}


@Injectable({
  providedIn: 'root'
})


export class Products {
  
  private products:product[]=[
    {
      id: 1,
      nombre: 'Laptop HP ProBook 450 G10',
      descripcion: 'Computadora portátil de 15.6 pulgadas, Full HD...',
      precio: 1500,
      imagen: '/img/Laptop-HP-ProBook-450-G10.jpg'
    },
    {
      id: 2,
      nombre: 'Laptop Dell Latitude 3450 Core i7-1355U',
      descripcion: 'Intel Core i7 - 1355U - 16 GB RAM...',
      precio: 1800,
      imagen: '/img/Laptop-Dell-Latitude-3450-Core-i7-1355U.jpg'
    },
    {
      id: 3,
      nombre: 'Laptop Dell Latitude 3450 14″ i5 1335U',
      descripcion: 'Computadora portátil de 14 pulgadas, HD, Intel Core i5...',
      precio: 2100,
      imagen: '/img/Laptop Dell Latitude 3450 14″ i5 1335U.jpg'
    }
     
  ]
  constructor() {}
  getProducts():product[]{
    return this.products
  }
}
