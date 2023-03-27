"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const create_subject_dto_1 = require("./dto/create-subject.dto");
const update_subject_dto_1 = require("./dto/update-subject.dto");
const subject_service_1 = require("./subject.service");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    async createSubject(response, createSubjectDto) {
        try {
            console.log(createSubjectDto);
            const newSubject = await this.subjectService.createSubject(createSubjectDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Subject has been created successfully',
                newSubject,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Subject not created!',
                error: 'Bad Request',
            });
        }
    }
    async updateSubject(response, studentId, updateSubjectDto) {
        try {
            const existingSubject = await this.subjectService.updateSubject(studentId, updateSubjectDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Subject has been successfully updated',
                existingSubject,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getSubjects(response) {
        try {
            const studentData = await this.subjectService.getAllSubjects();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All students data found successfully',
                studentData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getSubject(response, studentId) {
        try {
            const existingSubject = await this.subjectService.getSubject(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Subject found successfully',
                existingSubject,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteSubject(response, studentId) {
        try {
            const deletedSubject = await this.subjectService.deleteSubject(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Subject deleted successfully',
                deletedSubject,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "createSubject", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_subject_dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "updateSubject", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getSubjects", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getSubject", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "deleteSubject", null);
SubjectController = __decorate([
    (0, common_1.Controller)('subjects'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map