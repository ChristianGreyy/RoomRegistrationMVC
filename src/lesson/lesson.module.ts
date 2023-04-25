import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonController } from './lesson.controller';
import { Lesson, LessonSchema } from './lesson.schema';
import { LessonService } from './lesson.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
