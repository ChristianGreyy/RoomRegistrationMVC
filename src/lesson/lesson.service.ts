import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ILesson } from './lesson.interface';

@Injectable()
export class LessonService {
  constructor(@InjectModel('Lesson') private subjectModel: Model<ILesson>) {}
  async createLesson(createLessonDto: CreateLessonDto): Promise<ILesson> {
    const newLesson = await new this.subjectModel(createLessonDto);
    return newLesson.save();
  }
  async updateLesson(
    subjectId: string,
    updateLessonDto: UpdateLessonDto,
  ): Promise<ILesson> {
    const existingLesson = await this.subjectModel.findByIdAndUpdate(
      subjectId,
      updateLessonDto,
      { new: true },
    );
    if (!existingLesson) {
      throw new NotFoundException(`Lesson #${subjectId} not found`);
    }
    return existingLesson;
  }
  async getAllLessons(): Promise<ILesson[]> {
    const subjectData = await this.subjectModel.find().sort({ name: 1 });
    if (!subjectData || subjectData.length == 0) {
      throw new NotFoundException('Lessons data not found!');
    }
    return subjectData;
  }
  async getLesson(subjectId: string): Promise<ILesson> {
    const existingLesson = await this.subjectModel.findById(subjectId).exec();
    if (!existingLesson) {
      throw new NotFoundException(`Lesson #${subjectId} not found`);
    }
    return existingLesson;
  }
  async deleteLesson(subjectId: string): Promise<ILesson> {
    const deletedLesson = await this.subjectModel.findByIdAndDelete(subjectId);
    if (!deletedLesson) {
      throw new NotFoundException(`Lesson #${subjectId} not found`);
    }
    return deletedLesson;
  }
}
