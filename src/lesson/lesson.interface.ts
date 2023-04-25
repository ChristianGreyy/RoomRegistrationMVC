import { Document, Schema } from 'mongoose';

export interface ILesson extends Document {
  name: String;
}
