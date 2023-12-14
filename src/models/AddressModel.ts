import { Document, Schema, model } from 'mongoose';
import { Address } from '../types/Address.type';

interface AddressDocument extends Address, Omit<Document, '_id'> {}

export const AddressSchema = new Schema<AddressDocument>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  addressName: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  cep: { type: String, required: true },
  neighborhood: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: true },
  reference: { type: String, required: true },
});

const AddressModel = model<AddressDocument>('Address', AddressSchema);

export default AddressModel;
