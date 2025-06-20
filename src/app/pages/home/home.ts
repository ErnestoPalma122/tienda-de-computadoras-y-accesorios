import { Component } from '@angular/core';
import { categori, Category } from '../../services/category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  Categorias : categori[]=[];
  constructor(private categoria:Category){
  this.Categorias=this.categoria.getCategorys();
  }
}
