import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'deshboard',
    loadChildren: () => import('../deshboard/deshboard.module').then( m => m.DeshboardPageModule)
  },
  {
    path: 'exp-category',
    loadChildren: () => import('../exp-category/exp-category.module').then( m => m.ExpCategoryPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('../invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'qb-category',
    loadChildren: () => import('../qb-category/qb-category.module').then( m => m.QBCategoryPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('../reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('../event/event.module').then( m => m.EventPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
