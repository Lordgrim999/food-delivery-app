import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurant-listing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
