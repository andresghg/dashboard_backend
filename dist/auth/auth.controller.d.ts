import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/Login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginAuthDto): Promise<{
        token: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
