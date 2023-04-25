import { Model } from 'mongoose';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { ILesson } from './lesson.interface';
export declare class LessonService {
    private subjectModel;
    constructor(subjectModel: Model<ILesson>);
    createLesson(createLessonDto: CreateLessonDto): Promise<ILesson>;
    updateLesson(subjectId: string, updateLessonDto: UpdateLessonDto): Promise<ILesson>;
    getAllLessons(): Promise<ILesson[]>;
    getLesson(subjectId: string): Promise<ILesson>;
    deleteLesson(subjectId: string): Promise<ILesson>;
}
