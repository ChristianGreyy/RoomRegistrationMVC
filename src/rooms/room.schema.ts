import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class Room {
  @Prop({ required: true })
  day: string;
  @Prop({ required: true })
  month: string;
  @Prop({ required: true })
  year: string;
  @Prop({ required: true })
  startHour: string;
  @Prop({ required: true })
  startMinute: string;
  @Prop({ required: true })
  endHour: string;
  @Prop({ required: true })
  endMinute: string;
  @Prop({ required: true })
  room: string;
  @Prop({ required: true })
  subject: string;
  @Prop({})
  note: string;
  @Prop({ required: true, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}
export const RoomSchema = SchemaFactory.createForClass(Room);
