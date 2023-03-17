import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { IRoom } from './room.interface';
export declare class RoomService {
    private roomModel;
    constructor(roomModel: Model<IRoom>);
    createRoom(createRoomDto: CreateRoomDto): Promise<IRoom>;
    updateRoom(roomId: string, updateRoomDto: UpdateRoomDto): Promise<IRoom>;
    getAllRooms(): Promise<IRoom[]>;
    getRoom(roomId: string): Promise<IRoom>;
    deleteRoom(roomId: string): Promise<IRoom>;
}
