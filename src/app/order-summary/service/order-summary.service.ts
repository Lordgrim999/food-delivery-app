import { Injectable } from '@angular/core';
import { API_URL_ORDER } from '../../constants/url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { FoodCatalogue } from '../../shared/models/FoodCatalogue';
import { OrderDetails } from '../model/OrderDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = API_URL_ORDER + '/order/saveOrder';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200', // Replace with your Angular app URL
    }),
  };

  saveOrder(data: OrderDetails): Observable<any> {
    return this.http.post<OrderDetails>(this.apiUrl, data);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
