import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoomsController } from './rooms/room.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/RoomRegistration'),
  ],
  controllers: [AppController, RoomsController],
  providers: [AppService],
})
export class AppModule {}
