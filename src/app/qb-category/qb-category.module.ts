import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QBCategoryPageRoutingModule } from './qb-category-routing.module';

import { QBCategoryPage } from './qb-category.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QBCategoryPageRoutingModule
  ],
  declarations: [QBCategoryPage]
})
export class QBCategoryPageModule {}
