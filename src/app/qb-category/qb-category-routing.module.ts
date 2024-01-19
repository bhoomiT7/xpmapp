import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QBCategoryPage } from './qb-category.page';

const routes: Routes = [
  {
    path: '',
    component: QBCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QBCategoryPageRoutingModule {}
