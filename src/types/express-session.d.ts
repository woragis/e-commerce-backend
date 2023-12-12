import 'express-session';
import { Types } from 'mongoose';

declare module 'express-session' {
  interface SessionData {
    user: {
      userId: Types.ObjectId | null;
      admin: boolean;
    };
  }
}
