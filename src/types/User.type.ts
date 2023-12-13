import { Types } from 'mongoose';
import { Review } from './Review.type';

export interface UserAddress {
  state: string;
  city: string;
  cep: string;
  neighborhood: string;
  street: string;
  number: string;
  reference: string;
}

enum CardType {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  AMEX = 'AMEX',
  DISCOVER = 'DISCOVER',
}

export interface CardPaymentMethod {
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface PaypalPaymentMethod {
  email: string;
}

export interface User {
  _id: Types.ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  cards: CardPaymentMethod[];
  addresses: UserAddress[];
  reviews: Review[];
}

export interface readUserResolverArgs {
  _id: Types.ObjectId;
}

export interface createUserResolverArgs {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface updateUserResolverArgs {
  _id: Types.ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  cards: CardPaymentMethod[];
  addresses: UserAddress[];
}

export interface deleteUserResolverArgs {
  _id: Types.ObjectId;
}
