import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class Room {
  @Prop({ required: true })
  name: string;
}
export const RoomSchema = SchemaFactory.createForClass(Room);
