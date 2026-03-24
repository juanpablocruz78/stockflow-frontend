import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { OrdersList } from './features/orders/orders-list/orders-list';
import { authGuard } from './core/guards/auth.guard';
import { AdminLayout } from './core/layout/admin-layout/admin-layout';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { ProductsList } from './features/products/products-list/products-list';
import { ProductForm } from './features/products/product-form/product-form';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },

  {
    path: '',
    component: AdminLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'orders', component: OrdersList },
      {
        path: 'products',
        children: [
          { path: '', component: ProductsList },
          { path: 'new', component: ProductForm },
          { path: ':id', component: ProductForm },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
