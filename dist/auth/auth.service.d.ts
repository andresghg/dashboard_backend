import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly authRepository;
    constructor(authRepository: Repository<Auth>);
    create(createAuthDto: CreateAuthDto): Promise<{
        message: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
