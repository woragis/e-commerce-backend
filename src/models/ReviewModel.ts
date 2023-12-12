import { Schema, Types, Document, model } from 'mongoose';
import { Review } from '../types/Review.type';

interface ReviewDocument extends Review, Omit<Document, '_id'> {}

export const ReviewSchema = new Schema<ReviewDocument>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const ReviewModel = model<ReviewDocument>('Review', ReviewSchema);

export default ReviewModel;
