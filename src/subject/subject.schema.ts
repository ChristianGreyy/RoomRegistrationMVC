import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class Subject {
  @Prop({ required: true })
  name: string;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
