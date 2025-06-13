import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Productos } from './pages/products/products';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'nosotros', component: About},
    {path:'productos',component: Productos},
    {path:'contacto',component:Contact},
    {path:'**',redirectTo:''}
];
