import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { CalendarService } from './calendar.service';
@Controller('calendars')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}
  @Post()
  async createCalendar(
    @Res() response,
    @Body() createCalendarDto: CreateCalendarDto,
  ) {
    try {
      const newCalendar = await this.calendarService.createCalendar(
        createCalendarDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Calendar has been created successfully',
        newCalendar,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Calendar not created!',
        error: 'Bad Request',
      });
    }
  }
  @Put('/:id')
  async updateCalendar(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateCalendarDto: UpdateCalendarDto,
  ) {
    try {
      const existingCalendar = await this.calendarService.updateCalendar(
        studentId,
        updateCalendarDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Calendar has been successfully updated',
        existingCalendar,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getCalendars(@Res() response) {
    try {
      const studentData = await this.calendarService.getAllCalendars();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        studentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getCalendar(@Res() response, @Param('id') studentId: string) {
    try {
      const existingCalendar = await this.calendarService.getCalendar(
        studentId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Calendar found successfully',
        existingCalendar,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteCalendar(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedCalendar = await this.calendarService.deleteCalendar(
        studentId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Calendar deleted successfully',
        deletedCalendar,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
