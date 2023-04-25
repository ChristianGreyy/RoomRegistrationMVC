import { Document, Schema } from 'mongoose';
export interface ICalendar extends Document {
    day: Number;
    month: Number;
    year: Number;
    startTime: Schema.Types.ObjectId;
    endTime: Schema.Types.ObjectId;
    subject: Schema.Types.ObjectId;
    note: String;
    user: Schema.Types.ObjectId;
    room: Schema.Types.ObjectId;
}
