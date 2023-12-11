import { Types } from 'mongoose';
import { Review } from './Review.type';

export interface Product {
  _id: Types.ObjectId;
  name: string;
  price: number;
  discount: boolean;
  discount_price: number;
  description: string;
  specs: ProductSpecs;
  reviews: Review[];
  images: string[];
}

export interface ProductSpecs {
  weight: number;
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
}
