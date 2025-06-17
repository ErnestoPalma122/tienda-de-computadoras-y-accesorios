import { Injectable } from '@angular/core';

export interface categori{
  id:number;
  categoria:string;
  imagen:string;

}

@Injectable({
  providedIn: 'root'
})
export class Category {
  
  private categorys:categori[] =[
    {
      id:1,
      categoria:'Computadoras',
      imagen:'/Categoria/cate-compu.png'
    },
    {
      id:2,
      categoria:'Accesorios',
      imagen:'/Categoria/cate-accesorios.jpg'
    },
    {
      id:3,
      categoria:'Componentes',
      imagen:'/Categoria/cate-componen.jpg'
    }
  ]
  constructor() { }
  getCategorys():categori[]{
    return this.categorys;
  }
}
