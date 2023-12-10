import { Document, Schema, model } from 'mongoose';

interface ITechnicalInfo {
  weight: number;
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
}

interface IReview {
  userId: string;
  rating: number;
  comment: string;
}

export interface IItem {
  name: string;
  price: number;
  discount?: number;
  description: string;
  technicalInfo: ITechnicalInfo;
  imageUrls: string[];
  quantity: number;
  reviews: IReview[];
}

interface IItemModel extends IItem, Document {}

export const ItemSchema = new Schema<IItemModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number },
  description: { type: String, required: true },
  technicalInfo: {
    weight: { type: Number, required: true },
    dimensions: {
      height: { type: Number, required: true },
      width: { type: Number, required: true },
      depth: { type: Number, required: true },
    },
  },
  imageUrls: { type: [String], required: true },
  quantity: { type: Number, required: true },
  reviews: [
    {
      userId: { type: String, required: true },
      rating: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

export const ItemModel = model<IItemModel>('Item', ItemSchema);
