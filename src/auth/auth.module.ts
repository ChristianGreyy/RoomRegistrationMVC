import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthViewController } from './auth.view.controller';

@Module({
  controllers: [AuthController, AuthViewController],
  providers: [AuthService],
})
export class AuthModule {}
