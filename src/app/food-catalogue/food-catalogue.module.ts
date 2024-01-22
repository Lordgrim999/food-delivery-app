import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatalogueRoutingModule } from './food-catalogue-routing.module';
import { FoodCatalogueComponent } from './components/food-catalogue.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FoodCatalogueComponent],
  imports: [CommonModule, FoodCatalogueRoutingModule, HttpClientModule],
  exports: [FoodCatalogueComponent],
})
export class FoodCatalogueModule {}
