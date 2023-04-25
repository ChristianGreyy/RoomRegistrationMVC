import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class Calendar {
  @Prop({ required: true })
  day: number;
  @Prop({ required: true })
  month: number;
  @Prop({ required: true })
  year: number;
  @Prop({ required: true, ref: 'Lesson' })
  startTime: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true, ref: 'Lesson' })
  endTime: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true, ref: 'Subject' })
  subject: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true, ref: 'Room' })
  room: mongoose.Schema.Types.ObjectId;
  @Prop({})
  note: string;
  @Prop({ required: true, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}
export const CalendarSchema = SchemaFactory.createForClass(Calendar);
