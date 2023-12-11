import { Document, Schema, model } from 'mongoose';
import { User, CardPaymentMethod, PaypalPaymentMethod, UserAddress } from '../types/User.type';
import { reviewSchema } from './ReviewModel';

interface UserDocument extends User, Omit<Document, '_id'> {}

const cardSchema = new Schema<CardPaymentMethod>({
  cardholderName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true },
  // cardType: { type: String, enum: Object.values(CardType), required: true },
});

const PaypalPaymentMethodSchema = new Schema<PaypalPaymentMethod>({
  email: { type: String, required: true },
});

const userAddressSchema = new Schema<UserAddress>({
  cep: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  neighborhood: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: true },
  reference: { type: String, required: true },
});

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cards: [cardSchema],
  addresses: [userAddressSchema],
  reviews: [reviewSchema],
});

const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;
