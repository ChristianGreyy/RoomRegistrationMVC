import mongoose from 'mongoose';
export declare class Calendar {
    day: number;
    month: number;
    year: number;
    startTime: mongoose.Schema.Types.ObjectId;
    endTime: mongoose.Schema.Types.ObjectId;
    subject: mongoose.Schema.Types.ObjectId;
    room: mongoose.Schema.Types.ObjectId;
    note: string;
    user: mongoose.Schema.Types.ObjectId;
}
export declare const CalendarSchema: mongoose.Schema<Calendar, mongoose.Model<Calendar, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Calendar>;
