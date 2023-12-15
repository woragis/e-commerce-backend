import 'express';
import { Types } from 'mongoose';

declare module 'express' {
  interface Request {
    session: SessionData & {
      user: {
        _id: Types.ObjectId;
        admin: boolean;
      };
    };
  }
}
