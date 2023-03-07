import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-creadentials.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() authCreadentialsDto: AuthCredentialsDto,
  ): Promise<AuthCredentialsDto> {
    return this.authService.signUp(authCreadentialsDto);
  }
}
