import { Injectable } from '@angular/core';
import { API_URL_FC } from '../../constants/url';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { FoodItem } from '../../shared/models/FoodItem';
import { FoodCatalogue } from '../../shared/models/FoodCatalogue';

@Injectable({
  providedIn: 'root',
})
export class FoodCatalogueService {
  private appUrl =
    API_URL_FC + '/foodCatalogue/getRestaurantDetailsWithFoodItem';

  constructor(private http: HttpClient) {}

  getFoodItemsByRestaurant(restaurantId: number): Observable<FoodCatalogue> {
    return this.http.get<FoodCatalogue>(`${this.appUrl}/${restaurantId}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }
}
