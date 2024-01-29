import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExpCategoryPageRoutingModule } from './exp-category-routing.module';
import { ExpCategoryPage } from './exp-category.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ExpCategoryPageRoutingModule
  ],
  declarations: [ExpCategoryPage]
})
export class ExpCategoryPageModule {}
