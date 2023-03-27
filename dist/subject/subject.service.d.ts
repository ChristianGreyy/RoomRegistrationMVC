import { Model } from 'mongoose';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ISubject } from './subject.interface';
export declare class SubjectService {
    private subjectModel;
    constructor(subjectModel: Model<ISubject>);
    createSubject(createSubjectDto: CreateSubjectDto): Promise<ISubject>;
    updateSubject(subjectId: string, updateSubjectDto: UpdateSubjectDto): Promise<ISubject>;
    getAllSubjects(): Promise<ISubject[]>;
    getSubject(subjectId: string): Promise<ISubject>;
    deleteSubject(subjectId: string): Promise<ISubject>;
}
