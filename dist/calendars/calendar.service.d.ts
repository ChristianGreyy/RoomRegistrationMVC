import { Model } from 'mongoose';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { ICalendar } from './calendar.interface';
export declare class CalendarService {
    private roomModel;
    constructor(roomModel: Model<ICalendar>);
    createCalendar(createCalendarDto: CreateCalendarDto): Promise<ICalendar>;
    updateCalendar(roomId: string, updateCalendarDto: UpdateCalendarDto): Promise<ICalendar>;
    getAllCalendars(): Promise<ICalendar[]>;
    getCalendar(roomId: string): Promise<ICalendar>;
    deleteCalendar(roomId: string): Promise<ICalendar>;
}
