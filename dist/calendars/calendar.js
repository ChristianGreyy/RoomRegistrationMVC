"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const calendar_controller_1 = require("./calendar.controller");
describe('CalendarsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [calendar_controller_1.CalendarController],
        }).compile();
        controller = module.get(calendar_controller_1.CalendarController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=calendar.js.map