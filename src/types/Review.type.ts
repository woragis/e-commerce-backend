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

export interface readReviewArgs {
  _id: Types.ObjectId;
}

export interface addReviewArgs {
  input: { user_id: User['_id']; product_id: Product['_id']; rating: number; comment: string };
}

export interface editReviewArgs {
  input: { _id: Types.ObjectId; user_id?: User['_id']; product_id?: Product['_id']; rating?: number; comment?: string };
}

export interface deleteReviewArgs {
  _id: Types.ObjectId;
}
