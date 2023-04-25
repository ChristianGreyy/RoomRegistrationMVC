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
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonService } from './lesson.service';
@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}
  @Post()
  async createLesson(
    @Res() response,
    @Body() createLessonDto: CreateLessonDto,
  ) {
    try {
      console.log(createLessonDto);
      const newLesson = await this.lessonService.createLesson(createLessonDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Lesson has been created successfully',
        newLesson,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Lesson not created!',
        error: 'Bad Request',
      });
    }
  }
  @Put('/:id')
  async updateLesson(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateLessonDto: UpdateLessonDto,
  ) {
    try {
      const existingLesson = await this.lessonService.updateLesson(
        studentId,
        updateLessonDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Lesson has been successfully updated',
        existingLesson,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getLessons(@Res() response) {
    try {
      const data = await this.lessonService.getAllLessons();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getLesson(@Res() response, @Param('id') studentId: string) {
    try {
      const existingLesson = await this.lessonService.getLesson(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Lesson found successfully',
        existingLesson,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteLesson(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedLesson = await this.lessonService.deleteLesson(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Lesson deleted successfully',
        deletedLesson,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
