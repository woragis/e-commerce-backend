import { SessionData } from 'express-session';
import { Types } from 'mongoose';

declare module 'express-session' {
  interface SessionData {
    user: {
      _id: Types.ObjectId;
      admin: boolean;
    };
  }
}
