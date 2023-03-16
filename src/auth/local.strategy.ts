import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreadentials } from './dto/auth-creadentials.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(authCreadentials: AuthCreadentials): Promise<any> {
    const user = await this.authService.validateUser(authCreadentials);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
