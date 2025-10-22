"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_entity_1 = require("./entities/auth.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_1 = require("../utils/auth");
const jwt_1 = require("../utils/jwt");
const common_2 = require("@nestjs/common");
let AuthService = class AuthService {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async create(createAuthDto) {
        const { name, email, password } = createAuthDto;
        const userExist = await this.authRepository.findOneBy({ email });
        if (userExist) {
            throw new common_2.UnauthorizedException("El correo ya esta registrado");
        }
        createAuthDto.password = await (0, auth_1.hashPassword)(password);
        const user = this.authRepository.create(createAuthDto);
        await this.authRepository.save(user);
        return { message: "Usuario creado exitosamente" };
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
    async login(email, password) {
        const user = await this.authRepository.findOneBy({ email });
        if (!user) {
            throw new common_2.UnauthorizedException("El usuario no existe");
        }
        const isPasswordIncorrect = await (0, auth_1.comparePassword)(password, user.password);
        if (!isPasswordIncorrect) {
            throw new common_2.UnauthorizedException("Contraseña incorrecta");
        }
        const token = (0, jwt_1.generateJWT)(user.id.toString());
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_entity_1.Auth)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map