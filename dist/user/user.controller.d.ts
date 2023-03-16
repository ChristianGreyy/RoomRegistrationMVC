import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    updateUser(response: any, studentId: string, updateUserDto: UpdateUserDto): Promise<any>;
    getUsers(response: any): Promise<any>;
    getUser(response: any, studentId: string): Promise<any>;
    deleteUser(response: any, studentId: string): Promise<any>;
}
