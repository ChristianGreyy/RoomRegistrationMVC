import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomService } from './room.service';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    createRoom(response: any, createRoomDto: CreateRoomDto): Promise<any>;
    updateRoom(response: any, studentId: string, updateRoomDto: UpdateRoomDto): Promise<any>;
    getRooms(response: any): Promise<any>;
    getRoom(response: any, studentId: string): Promise<any>;
    deleteRoom(response: any, studentId: string): Promise<any>;
}
