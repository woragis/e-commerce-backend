import { Document, Schema, model } from 'mongoose';
import { Product } from '../types/Product.type';

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
  images: [{ type: String, required: true }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', required: false }],
});

const ProductModel = model<ProductDocument>('Product', ProductSchema);

export default ProductModel;
