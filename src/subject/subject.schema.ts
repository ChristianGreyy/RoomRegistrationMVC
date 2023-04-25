import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Subject {
  @Prop({ required: true })
  name: string;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
