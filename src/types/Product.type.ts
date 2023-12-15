import { Types } from 'mongoose';
import { Review } from './Review.type';

export interface Product {
  _id: Types.ObjectId;
  name: string;
  price: number;
  discount: boolean;
  discount_price: number;
  quantity: number;
  description: string;
  images: string[];
  specs: ProductSpecs;
  reviews: Review[];
}

export interface ProductSpecs {
  weight: number;
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
}

export interface readProductArgs {
  _id: Types.ObjectId;
}

export interface addProductArgs {
  input: {
    name: string;
    price: number;
    discount?: boolean;
    discount_price?: number;
    quantity: number;
    description: string;
    images: string[];
    specs: ProductSpecs;
  };
}

export interface editProductArgs {
  input: {
    _id: Types.ObjectId;
    name?: string;
    price?: number;
    discount?: boolean;
    discount_price?: number;
    quantity?: number;
    description?: string;
    images?: string[];
    specs?: ProductSpecs;
  };
}

export interface deleteProductArgs {
  _id: Types.ObjectId;
}
