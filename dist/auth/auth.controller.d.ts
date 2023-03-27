import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthCreadentials } from './dto/auth-creadentials.dto';
export declare class AuthController {
    private readonly userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    register(response: any, createUserDto: CreateUserDto): Promise<any>;
    login(authCreadentials: AuthCreadentials, response: any): Promise<{
        accessToken: string;
    }>;
}
