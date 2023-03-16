import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './user.interface';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<IUser>);
    createUser(createUserDto: CreateUserDto): Promise<IUser>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUser(userId: string): Promise<IUser>;
    deleteUser(userId: string): Promise<IUser>;
}
