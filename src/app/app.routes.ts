import { Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'store',
    component: StorePageComponent,
  },
  {
    path: 'reviews',
    component: HomePageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
];
