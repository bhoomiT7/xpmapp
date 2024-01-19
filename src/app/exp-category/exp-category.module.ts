import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpCategoryPageRoutingModule } from './exp-category-routing.module';

import { ExpCategoryPage } from './exp-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpCategoryPageRoutingModule
  ],
  declarations: [ExpCategoryPage]
})
export class ExpCategoryPageModule {}
