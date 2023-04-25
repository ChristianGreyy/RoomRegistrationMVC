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
exports.CalendarController = void 0;
const common_1 = require("@nestjs/common");
const create_calendar_dto_1 = require("./dto/create-calendar.dto");
const update_calendar_dto_1 = require("./dto/update-calendar.dto");
const calendar_service_1 = require("./calendar.service");
let CalendarController = class CalendarController {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    async createCalendar(response, createCalendarDto) {
        try {
            const newCalendar = await this.calendarService.createCalendar(createCalendarDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Calendar has been created successfully',
                newCalendar,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Calendar not created!',
                error: 'Bad Request',
            });
        }
    }
    async updateCalendar(response, studentId, updateCalendarDto) {
        try {
            const existingCalendar = await this.calendarService.updateCalendar(studentId, updateCalendarDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Calendar has been successfully updated',
                existingCalendar,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getCalendars(response) {
        try {
            const studentData = await this.calendarService.getAllCalendars();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All students data found successfully',
                studentData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getCalendar(response, studentId) {
        try {
            const existingCalendar = await this.calendarService.getCalendar(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Calendar found successfully',
                existingCalendar,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteCalendar(response, studentId) {
        try {
            const deletedCalendar = await this.calendarService.deleteCalendar(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Calendar deleted successfully',
                deletedCalendar,
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
    __metadata("design:paramtypes", [Object, create_calendar_dto_1.CreateCalendarDto]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "createCalendar", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_calendar_dto_1.UpdateCalendarDto]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "updateCalendar", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getCalendars", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getCalendar", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "deleteCalendar", null);
CalendarController = __decorate([
    (0, common_1.Controller)('calendars'),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService])
], CalendarController);
exports.CalendarController = CalendarController;
//# sourceMappingURL=calendar.controller.js.map