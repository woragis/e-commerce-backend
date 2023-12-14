import { Document, Schema, model } from 'mongoose';
import { User } from '../types/User.type';

interface UserDocument extends User, Omit<Document, '_id'> {}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card', required: false }],
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address', required: false }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', required: false }],
});

const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;
