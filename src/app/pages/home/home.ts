import { Component } from '@angular/core';
import { categori, Category } from '../../services/category';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  Categorias : categori[]=[];
  constructor(private categoria:Category){
  this.Categorias=this.categoria.getCategorys();
  }
}
