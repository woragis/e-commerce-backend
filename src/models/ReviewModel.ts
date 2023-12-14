import { Document, Schema, model } from 'mongoose';
import { Review } from '../types/Review.type';

interface ReviewDocument extends Review, Omit<Document, '_id'> {}

export const ReviewSchema = new Schema<ReviewDocument>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const ReviewModel = model<ReviewDocument>('Review', ReviewSchema);

export default ReviewModel;
