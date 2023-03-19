import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomService } from './room.service';
@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  @Post()
  async createRoom(@Res() response, @Body() createRoomDto: CreateRoomDto) {
    try {
      const newRoom = await this.roomService.createRoom(createRoomDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Room has been created successfully',
        newRoom,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Room not created!',
        error: 'Bad Request',
      });
    }
  }
  @Put('/:id')
  async updateRoom(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    try {
      const existingRoom = await this.roomService.updateRoom(
        studentId,
        updateRoomDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Room has been successfully updated',
        existingRoom,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getRooms(@Res() response) {
    try {
      const studentData = await this.roomService.getAllRooms();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        studentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getRoom(@Res() response, @Param('id') studentId: string) {
    try {
      const existingRoom = await this.roomService.getRoom(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Room found successfully',
        existingRoom,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteRoom(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedRoom = await this.roomService.deleteRoom(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Room deleted successfully',
        deletedRoom,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
