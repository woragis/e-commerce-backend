import { Document, Schema, model } from 'mongoose';

interface UserAddress {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

enum CardType {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  AMEX = 'AMEX',
  DISCOVER = 'DISCOVER',
}

interface CardPaymentMethod {
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardType: CardType;
}

interface PaypalPaymentMethod {
  email: string;
}

interface User {
  email: string;
  password: string;
  cards: CardPaymentMethod[];
  paypal: PaypalPaymentMethod;
  addresses: UserAddress[];
}

interface UserDocument extends User, Document {}

const cardSchema = new Schema<CardPaymentMethod>({
  cardholderName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true },
  cardType: { type: String, enum: Object.values(CardType), required: true },
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
});

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cards: [cardSchema],
  paypal: PaypalPaymentMethodSchema,
  addresses: [userAddressSchema],
});

const UserModel = model<UserDocument>('User', userSchema);

export { User, UserModel, CardType };
