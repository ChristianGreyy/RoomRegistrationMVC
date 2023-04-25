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
exports.LessonController = void 0;
const common_1 = require("@nestjs/common");
const create_lesson_dto_1 = require("./dto/create-lesson.dto");
const update_lesson_dto_1 = require("./dto/update-lesson.dto");
const lesson_service_1 = require("./lesson.service");
let LessonController = class LessonController {
    constructor(lessonService) {
        this.lessonService = lessonService;
    }
    async createLesson(response, createLessonDto) {
        try {
            console.log(createLessonDto);
            const newLesson = await this.lessonService.createLesson(createLessonDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Lesson has been created successfully',
                newLesson,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Lesson not created!',
                error: 'Bad Request',
            });
        }
    }
    async updateLesson(response, studentId, updateLessonDto) {
        try {
            const existingLesson = await this.lessonService.updateLesson(studentId, updateLessonDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Lesson has been successfully updated',
                existingLesson,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getLessons(response) {
        try {
            const data = await this.lessonService.getAllLessons();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All students data found successfully',
                data,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getLesson(response, studentId) {
        try {
            const existingLesson = await this.lessonService.getLesson(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Lesson found successfully',
                existingLesson,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteLesson(response, studentId) {
        try {
            const deletedLesson = await this.lessonService.deleteLesson(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Lesson deleted successfully',
                deletedLesson,
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
    __metadata("design:paramtypes", [Object, create_lesson_dto_1.CreateLessonDto]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "createLesson", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_lesson_dto_1.UpdateLessonDto]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "updateLesson", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "getLessons", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "getLesson", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "deleteLesson", null);
LessonController = __decorate([
    (0, common_1.Controller)('lessons'),
    __metadata("design:paramtypes", [lesson_service_1.LessonService])
], LessonController);
exports.LessonController = LessonController;
//# sourceMappingURL=lesson.controller.js.map