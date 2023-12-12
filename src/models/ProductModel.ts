import { Document, Schema, model } from 'mongoose';
import { Product } from '../types/Product.type';
import { ReviewSchema } from './ReviewModel';

interface ProductDocument extends Product, Omit<Document, '_id'> {}

const ProductSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Boolean, required: true },
  discount_price: { type: Number },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  specs: {
    weight: { type: Number },
    dimensions: {
      height: { type: Number },
      width: { type: Number },
      depth: { type: Number },
    },
  },
  reviews: [ReviewSchema],
  images: [{ type: String, required: true }],
});

const ProductModel = model<ProductDocument>('Product', ProductSchema);

export default ProductModel;
