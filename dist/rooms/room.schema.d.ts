import mongoose from 'mongoose';
export declare class Room {
    day: string;
    month: string;
    year: string;
    shift: string;
    user: mongoose.Schema.Types.ObjectId;
}
export declare const RoomSchema: mongoose.Schema<Room, mongoose.Model<Room, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Room>;
