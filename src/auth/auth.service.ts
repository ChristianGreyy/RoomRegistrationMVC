import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/user/user.interface';
import { AuthCreadentials } from './dto/auth-creadentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User')
    private userModel: Model<IUser>,
    private jwtService: JwtService,
  ) {}
  async login(
    authCreadentials: AuthCreadentials,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCreadentials;
    const user = await this.validateUser(authCreadentials);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user._id };
    const accessToken = await this.jwtService.sign(payload);
    // console.log(accessToken);
    return {
      accessToken,
    };
  }

  async validateUser(authCreadentials: AuthCreadentials): Promise<any> {
    const { username, password } = authCreadentials;
    const user = await this.userModel.findOne({ username });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
