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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RoomService = class RoomService {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    async createRoom(createRoomDto) {
        const newRoom = await new this.roomModel(createRoomDto);
        return newRoom.save();
    }
    async updateRoom(roomId, updateRoomDto) {
        const existingRoom = await this.roomModel.findByIdAndUpdate(roomId, updateRoomDto, { new: true });
        if (!existingRoom) {
            throw new common_1.NotFoundException(`Room #${roomId} not found`);
        }
        return existingRoom;
    }
    async getAllRooms() {
        const roomData = await this.roomModel.find();
        if (!roomData || roomData.length == 0) {
            throw new common_1.NotFoundException('Rooms data not found!');
        }
        return roomData;
    }
    async getRoom(roomId) {
        const existingRoom = await this.roomModel.findById(roomId).exec();
        if (!existingRoom) {
            throw new common_1.NotFoundException(`Room #${roomId} not found`);
        }
        return existingRoom;
    }
    async deleteRoom(roomId) {
        const deletedRoom = await this.roomModel.findByIdAndDelete(roomId);
        if (!deletedRoom) {
            throw new common_1.NotFoundException(`Room #${roomId} not found`);
        }
        return deletedRoom;
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Room')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map