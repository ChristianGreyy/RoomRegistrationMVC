import { Body, Controller, Post, Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-creadentials.dto';

@Injectable()
export class AuthService {
  constructor() {}

  async signUp(@Body() authCreadentialsDto: AuthCredentialsDto) {
    console.log(authCreadentialsDto);
    return authCreadentialsDto;
  }
}
