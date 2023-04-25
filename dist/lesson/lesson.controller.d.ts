import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonService } from './lesson.service';
export declare class LessonController {
    private readonly lessonService;
    constructor(lessonService: LessonService);
    createLesson(response: any, createLessonDto: CreateLessonDto): Promise<any>;
    updateLesson(response: any, studentId: string, updateLessonDto: UpdateLessonDto): Promise<any>;
    getLessons(response: any): Promise<any>;
    getLesson(response: any, studentId: string): Promise<any>;
    deleteLesson(response: any, studentId: string): Promise<any>;
}
