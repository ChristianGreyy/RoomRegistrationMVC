import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Lesson {
  @Prop({ required: true })
  name: number;
  @Prop({ required: true })
  startHour: number;
  @Prop({ required: true })
  endHour: number;
  @Prop({ required: true })
  startMinute: number;
  @Prop({ required: true })
  endMinute: number;
}
export const LessonSchema = SchemaFactory.createForClass(Lesson);
