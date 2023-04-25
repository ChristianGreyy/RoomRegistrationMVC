import mongoose from 'mongoose';
export declare class Lesson {
    name: number;
    startHour: number;
    endHour: number;
    startMinute: number;
    endMinute: number;
}
export declare const LessonSchema: mongoose.Schema<Lesson, mongoose.Model<Lesson, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Lesson>;
