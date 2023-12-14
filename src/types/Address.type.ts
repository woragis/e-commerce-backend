import { Types } from 'mongoose';
import { User } from './User.type';

export interface Address {
  _id: Types.ObjectId;
  user_id: User['_id'];
  addressName: string;
  state: string;
  city: string;
  cep: string;
  neighborhood: string;
  street: string;
  number: string;
  reference: string;
}

export interface readAddressArgs {
  _id: Types.ObjectId;
}

export interface addAddressArgs {
  user_id: User['_id'];
  addressName: string;
  state: string;
  city: string;
  cep: string;
  neighborhood: string;
  street: string;
  number: string;
  reference: string;
}

export interface editAddressArgs {
  _id: Types.ObjectId;
  addressName?: string;
  state?: string;
  city?: string;
  cep?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  reference?: string;
}

export interface deleteAddressArgs {
  _id: Types.ObjectId;
}
