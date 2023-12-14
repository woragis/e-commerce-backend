import { Types } from 'mongoose';
import { User } from './User.type';

export interface Card {
  _id: Types.ObjectId;
  cardNickname: string;
  user_id: User['_id'];
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface readCardArgs {
  _id: Types.ObjectId;
}

export interface addCardArgs {
  cardNickname: string;
  user_id: User['_id'];
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface editCardArgs {
  _id: Types.ObjectId;
  cardNickname?: string;
  cardholderName?: string;
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}

export interface deleteCardArgs {
  _id: Types.ObjectId;
}
