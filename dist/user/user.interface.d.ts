import { Document } from 'mongoose';
export interface IUser extends Document {
    username: String;
    password: String;
    avatar: String;
    role: String;
}
