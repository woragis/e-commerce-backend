import { Schema, Types, Document, model } from 'mongoose';
import { Review } from '../types/Review.type';

export const reviewSchema = new Schema<Review>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});
