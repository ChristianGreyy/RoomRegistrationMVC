import { AuthCredentialsDto } from './dto/auth-creadentials.dto';
export declare class AuthService {
    constructor();
    signUp(authCreadentialsDto: AuthCredentialsDto): Promise<AuthCredentialsDto>;
}
