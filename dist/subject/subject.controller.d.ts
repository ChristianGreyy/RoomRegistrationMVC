import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectService } from './subject.service';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    createSubject(response: any, createSubjectDto: CreateSubjectDto): Promise<any>;
    updateSubject(response: any, studentId: string, updateSubjectDto: UpdateSubjectDto): Promise<any>;
    getSubjects(response: any): Promise<any>;
    getSubject(response: any, studentId: string): Promise<any>;
    deleteSubject(response: any, studentId: string): Promise<any>;
}
