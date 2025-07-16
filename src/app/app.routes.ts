import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Productos } from './pages/products/products';
import { Login } from './pages/login/login';
import { CategoC } from './pages/catego-c/catego-c';
import { CreateUser } from './pages/create-user/create-user';
import { Infoprod } from './pages/infoprod/infoprod';
import { Carrito } from './pages/carrito/carrito';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'nosotros', component: About},
    {path:'productos',component: Productos},
    {path:'contacto',component:Contact},
    {path:'catego-c',component:CategoC},
    {path:'infoprod/:id', component:Infoprod},
    {path:'carrito', component:Carrito, canActivate: [authGuard]},
    {path:'login',component:Login},
    {path:'create-user',component:CreateUser},
    {path:'**',redirectTo:''}
];
