import { Request } from 'express';
import { Types } from 'mongoose';

export interface GraphqlContext {
  req: Request;
}

export interface GraphqlParent {
  _id: Types.ObjectId;
}

export interface SearchOptions {
  offset: number;
  limit: number;
}
