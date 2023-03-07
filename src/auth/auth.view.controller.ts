import { Get, Controller, Res, Render } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthViewController {
  //   constructor() {}

  @Get('sign-in')
  SignIn(@Res() res: Response) {
    return res.render('index', { message: 'Sign in' });
  }

  @Get('sign-up')
  SignUp(@Res() res: Response) {
    return res.render('index', { message: 'Sign up' });
  }
}
