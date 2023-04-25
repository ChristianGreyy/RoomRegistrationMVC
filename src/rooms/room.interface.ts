import { Document, Schema } from 'mongoose';

export interface IRoom extends Document {
  name: String;
}
