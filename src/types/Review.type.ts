import { User } from './User.type';
import { Product } from './Product.type';

export interface Review {
  user: User['_id'];
  product: Product['_id'];
  rating: number;
  comment: string;
}
