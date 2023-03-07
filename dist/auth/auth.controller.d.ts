import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-creadentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCreadentialsDto: AuthCredentialsDto): Promise<AuthCredentialsDto>;
}
