import { FoodItem } from '../../shared/models/FoodItem';
import { Restaurant } from '../../shared/models/Restaurant';

export interface OrderDetails {
  foodItemsList: FoodItem[];
  userId?: number;
  restaurant?: Restaurant;
}
