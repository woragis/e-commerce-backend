import { User } from './User.type';
import { Product } from './Product.type';
import { Types } from 'mongoose';

export interface Review {
  _id: Types.ObjectId;
  user: User['_id'];
  product: Product['_id'];
  rating: number;
  comment: string;
}

export interface readReview {
  id: Types.ObjectId;
}
