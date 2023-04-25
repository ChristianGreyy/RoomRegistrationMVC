import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { CalendarService } from './calendar.service';
export declare class CalendarController {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    createCalendar(response: any, createCalendarDto: CreateCalendarDto): Promise<any>;
    updateCalendar(response: any, studentId: string, updateCalendarDto: UpdateCalendarDto): Promise<any>;
    getCalendars(response: any): Promise<any>;
    getCalendar(response: any, studentId: string): Promise<any>;
    deleteCalendar(response: any, studentId: string): Promise<any>;
}
