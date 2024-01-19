import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpCategoryPage } from './exp-category.page';

const routes: Routes = [
  {
    path: '',
    component: ExpCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpCategoryPageRoutingModule {}
