import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { ICalendar } from './calendar.interface';

@Injectable()
export class CalendarService {
  constructor(@InjectModel('Calendar') private roomModel: Model<ICalendar>) {}
  async createCalendar(
    createCalendarDto: CreateCalendarDto,
  ): Promise<ICalendar> {
    const newCalendar = await new this.roomModel(createCalendarDto);
    return newCalendar.save();
  }
  async updateCalendar(
    roomId: string,
    updateCalendarDto: UpdateCalendarDto,
  ): Promise<ICalendar> {
    const existingCalendar = await this.roomModel.findByIdAndUpdate(
      roomId,
      updateCalendarDto,
      { new: true },
    );
    if (!existingCalendar) {
      throw new NotFoundException(`Calendar #${roomId} not found`);
    }
    return existingCalendar;
  }
  async getAllCalendars(): Promise<ICalendar[]> {
    const roomData = await this.roomModel.find();
    if (!roomData || roomData.length == 0) {
      throw new NotFoundException('Calendars data not found!');
    }
    return roomData;
  }
  async getCalendar(roomId: string): Promise<ICalendar> {
    const existingCalendar = await this.roomModel.findById(roomId).exec();
    if (!existingCalendar) {
      throw new NotFoundException(`Calendar #${roomId} not found`);
    }
    return existingCalendar;
  }
  async deleteCalendar(roomId: string): Promise<ICalendar> {
    const deletedCalendar = await this.roomModel.findByIdAndDelete(roomId);
    if (!deletedCalendar) {
      throw new NotFoundException(`Calendar #${roomId} not found`);
    }
    return deletedCalendar;
  }
}
