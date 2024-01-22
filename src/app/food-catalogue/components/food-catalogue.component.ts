import { Component, OnInit } from '@angular/core';
import { FoodCatalogueService } from '../service/food-catalogue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCatalogue } from '../../shared/models/FoodCatalogue';
import { FoodItem } from '../../shared/models/FoodItem';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrl: './food-catalogue.component.css',
})
export class FoodCatalogueComponent implements OnInit {
  foodCatalogueData!: FoodCatalogue;
  restaurantId!: number;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodCatalogue = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodCatalogueService: FoodCatalogueService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.restaurantId = +param.get('id')!;
    });
    this.foodCatalogueService
      .getFoodItemsByRestaurant(this.restaurantId)
      .subscribe(
        (data) => {
          this.foodCatalogueData = data;
        },
        (err) => console.log(err)
      );
  }

  decrement(foodItem: FoodItem) {
    if (foodItem.quantity > 0) {
      foodItem.quantity--;

      const index = this.foodItemCart.findIndex(
        (item) => item.id === foodItem.id
      );
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = foodItem;
      }
    }
  }
  increment(foodItem: FoodItem) {
    foodItem.quantity++;
    const index = this.foodItemCart.findIndex(
      (item) => item.id === foodItem.id
    );
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(foodItem);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = foodItem;
    }
  }

  onCheckOut() {
    this.foodItemCart;

    this.orderSummary.foodItemsList = this.foodItemCart;
    this.orderSummary.restaurant = this.foodCatalogueData.restaurant;
    this.router.navigate(['/orderSummary'], {
      queryParams: { data: JSON.stringify(this.orderSummary) },
    });
  }
}
