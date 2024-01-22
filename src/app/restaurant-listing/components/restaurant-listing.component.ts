import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/models/Restaurant';
import { RestaurantService } from '../service/restaurant-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css',
})
export class RestaurantListingComponent implements OnInit {
  public restaurantList: Restaurant[] = [];
  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}
  ngOnInit(): void {
    this.restaurantService.getAllRestaurantDetails().subscribe(
      (result) => {
        this.restaurantList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRandomImage(): string {
    const imageCount = 8;
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `${randomIndex}.jpg`;
  }
  onButtonClick(restaurantId: number): void {
    this.router.navigate(['/food-catalogue', restaurantId]);
  }
}
