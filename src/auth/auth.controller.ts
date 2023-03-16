import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthCreadentials } from './dto/auth-creadentials.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}
  @Post('register')
  async register(@Res() response, @Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.createUser(createUserDto);
    return response.status(HttpStatus.CREATED).json({
      message: 'Sign up successfully',
      newUser,
    });
  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() authCreadentials: AuthCreadentials,
  ): Promise<{ accessToken: string }> {
    console.log(await this.authService.login(authCreadentials));
    return await this.authService.login(authCreadentials);
  }
}
