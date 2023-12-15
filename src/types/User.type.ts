import { Types } from 'mongoose';
import { Review, addReviewArgs } from './Review.type';
import { addAddressArgs } from './Address.type';
import { addCardArgs } from './Card.type';

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
  admin: boolean;
  cards: CardPaymentMethod[];
  addresses: UserAddress[];
  reviews: Review[];
}

export interface readUserResolverArgs {
  _id: Types.ObjectId;
}

export interface createUserResolverArgs {
  input: {
    name: string;
    username: string;
    email: string;
    password: string;
    admin: boolean;
    cards?: addCardArgs[];
    addresses?: addAddressArgs[];
  };
}

export interface updateUserResolverArgs {
  input: {
    _id: Types.ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
    admin: boolean;
    cards: CardPaymentMethod[];
    addresses: UserAddress[];
  };
}

export interface deleteUserResolverArgs {
  _id: Types.ObjectId;
}
