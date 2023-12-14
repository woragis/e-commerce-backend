import { User } from './User.type';
import { Product } from './Product.type';
import { Types } from 'mongoose';

export interface Review {
  _id: Types.ObjectId;
  user_id: User['_id'];
  product_id: Product['_id'];
  rating: number;
  comment: string;
}

export interface readReview {
  _id: Types.ObjectId;
}
