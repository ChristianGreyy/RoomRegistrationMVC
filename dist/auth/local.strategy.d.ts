import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { AuthCreadentials } from './dto/auth-creadentials.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(authCreadentials: AuthCreadentials): Promise<any>;
}
export {};
