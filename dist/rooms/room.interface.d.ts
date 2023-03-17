import { Document, Schema } from 'mongoose';
export interface IRoom extends Document {
    day: String;
    month: String;
    year: String;
    shift: String;
    user: Schema.Types.ObjectId;
}
