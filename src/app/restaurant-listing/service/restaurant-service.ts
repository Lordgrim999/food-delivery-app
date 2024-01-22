import { Injectable } from '@angular/core';
import { API_URL_RL } from '../../constants/url';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Restaurant } from '../../shared/models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = API_URL_RL + '/restaurant/getAllRestaurants';

  constructor(private http: HttpClient) {}

  getAllRestaurantDetails(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl).pipe(
      catchError((err) => {
        throw 'error in fetching restaurant details: ' + err;
      })
    );
  }
}
