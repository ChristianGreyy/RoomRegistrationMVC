import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LessonModule } from './lesson/lesson.module';
import { CalendarModule } from './calendars/calendar.module';
import { SubjectModule } from './subject/subject.module';
import { UserModule } from './user/user.module';
import { RoomModule } from './rooms/room.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    CalendarModule,
    SubjectModule,
    RoomModule,
    LessonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/RoomRegistration'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
