import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { IRoom } from './room.interface';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private roomModel: Model<IRoom>) {}
  async createRoom(createRoomDto: CreateRoomDto): Promise<IRoom> {
    const newRoom = await new this.roomModel(createRoomDto);
    return newRoom.save();
  }
  async updateRoom(
    roomId: string,
    updateRoomDto: UpdateRoomDto,
  ): Promise<IRoom> {
    const existingRoom = await this.roomModel.findByIdAndUpdate(
      roomId,
      updateRoomDto,
      { new: true },
    );
    if (!existingRoom) {
      throw new NotFoundException(`Room #${roomId} not found`);
    }
    return existingRoom;
  }
  async getAllRooms(): Promise<IRoom[]> {
    const roomData = await this.roomModel.find();
    if (!roomData || roomData.length == 0) {
      throw new NotFoundException('Rooms data not found!');
    }
    return roomData;
  }
  async getRoom(roomId: string): Promise<IRoom> {
    const existingRoom = await this.roomModel.findById(roomId).exec();
    if (!existingRoom) {
      throw new NotFoundException(`Room #${roomId} not found`);
    }
    return existingRoom;
  }
  async deleteRoom(roomId: string): Promise<IRoom> {
    const deletedRoom = await this.roomModel.findByIdAndDelete(roomId);
    if (!deletedRoom) {
      throw new NotFoundException(`Room #${roomId} not found`);
    }
    return deletedRoom;
  }
}
