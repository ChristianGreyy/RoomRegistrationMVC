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
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectService } from './subject.service';
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Post()
  async createSubject(
    @Res() response,
    @Body() createSubjectDto: CreateSubjectDto,
  ) {
    try {
      console.log(createSubjectDto);
      const newSubject = await this.subjectService.createSubject(
        createSubjectDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Subject has been created successfully',
        newSubject,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Subject not created!',
        error: 'Bad Request',
      });
    }
  }
  @Put('/:id')
  async updateSubject(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ) {
    try {
      const existingSubject = await this.subjectService.updateSubject(
        studentId,
        updateSubjectDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Subject has been successfully updated',
        existingSubject,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getSubjects(@Res() response) {
    try {
      const data = await this.subjectService.getAllSubjects();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getSubject(@Res() response, @Param('id') studentId: string) {
    try {
      const existingSubject = await this.subjectService.getSubject(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Subject found successfully',
        existingSubject,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteSubject(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedSubject = await this.subjectService.deleteSubject(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Subject deleted successfully',
        deletedSubject,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
