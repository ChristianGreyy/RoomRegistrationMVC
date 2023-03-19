import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({
    required: true,
  })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({
    default: '/default.jpg',
    required: true,
  })
  avatar: string;
  @Prop({ default: 'user' })
  role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
