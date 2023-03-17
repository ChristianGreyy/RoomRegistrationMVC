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
  shift: string;
  @Prop({ required: true, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}
export const RoomSchema = SchemaFactory.createForClass(Room);
