import { Schema, Document, model } from 'mongoose';

interface Review {
  itemId: string;
  userId: string;
  rating: number;
  comment: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  discount: boolean;
  discountPrice: number;
  description: string;
  images: string[];
  reviews: Review[];
}
