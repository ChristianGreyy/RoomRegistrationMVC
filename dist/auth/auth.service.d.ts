import { Model } from 'mongoose';
import { IUser } from 'src/user/user.interface';
import { AuthCreadentials } from './dto/auth-creadentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<IUser>, jwtService: JwtService);
    login(authCreadentials: AuthCreadentials): Promise<{
        accessToken: string;
    }>;
    validateUser(authCreadentials: AuthCreadentials): Promise<any>;
}
