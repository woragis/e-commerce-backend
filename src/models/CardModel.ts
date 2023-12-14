import { Document, Schema, model } from 'mongoose';
import { Card } from '../types/Card.type';

interface CardDocument extends Card, Omit<Document, '_id'> {}

export const CardSchema = new Schema<CardDocument>({
  cardNickname: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  cardholderName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

const CardModel = model<CardDocument>('Card', CardSchema);

export default CardModel;
