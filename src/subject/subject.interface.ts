import { Document, Schema } from 'mongoose';

export interface ISubject extends Document {
  name: String;
}
