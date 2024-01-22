import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../service/order-summary.service';
import { OrderDetails } from '../model/OrderDetails';
import { FoodCatalogue } from '../../shared/models/FoodCatalogue';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent implements OnInit {
  orderSummary!: OrderDetails;
  obj!: OrderDetails;
  total!: number;
  showDialog: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);

    this.orderSummary = this.obj;
    this.orderSummary.userId = 1;
    this.total = this.orderSummary.foodItemsList.reduce((acc, foodItem) => {
      return acc + foodItem.quantity * foodItem.price;
    }, 0);
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary).subscribe(
      (result) => {
        this.showDialog = true;
      },
      (err) => {
        console.log('failed to save order ' + err);
      }
    );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']);
  }
}
