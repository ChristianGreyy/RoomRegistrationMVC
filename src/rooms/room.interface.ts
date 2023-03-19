import { Document, Schema } from 'mongoose';

export interface IRoom extends Document {
  day: String;
  month: String;
  year: String;
  startHour: String;
  startMinute: String;
  endHour: String;
  endMinute: String;
  user: Schema.Types.ObjectId;
}
